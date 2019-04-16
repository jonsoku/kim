<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\PostRequest;
use App\PostComment;

class PostController extends Controller
{

    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    public function index()
    {
        $posts = \App\Post::with('user')->with('postComments')->latest()->get();
        return response()->json([
            'posts' => $posts
        ]);
    }

    public function myIndex()
    {
        $posts = Post::with('postComments')->where('user_id', auth()->id())->get();
        return response()->json([
            'myposts' => $posts
        ]);
    }

    public function create()
    {
        //
    }

    public function store(PostRequest $request)
    {
        $user = $request->user();

        if($request->hasFile('cover_image')){
            $filenameWithExt = $request->file('cover_image')->getClientOriginalName();
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('cover_image')->getClientOriginalExtension();
            $fileNameToStore = $filename.'_'.time().'_'.$extension;
            $path = $request->file('cover_image')->storeAs('public/cover_images', $fileNameToStore);
        }else{
            $fileNameToStore = 'noimage.jpg';
        }
        $user->posts()->create([
            'title' => request('title'),
            'description' =>request('description'),
            'cover_image' => $fileNameToStore,
            'user_id' => auth()->user()->id
        ]);

    }

    public function show(Post $post)
    {
        $post->user;
        $postComments = $post->postComments()->with('user')->latest()->get();
        $post->increment('view_count');
        return response()->json([
            'post' => $post,
            'postComments' => $postComments
        ]);
    }

    public function edit(Post $post)
    {
        //
    }

    public function update(Request $request, Post $post)
    {
        $post->update($request->all());
    }

    public function destroy(Post $post)
    {
        $post->delete();
        // user()->isAdmin()->
    }
}
