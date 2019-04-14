<?php

namespace App\Http\Controllers;

use App\Youtube;
use Illuminate\Http\Request;
use App\Http\Requests\YoutubeRequest;

class YoutubeController extends Controller
{
    public function __construct(Youtube $youtube)
    {
        $this->youtube = $youtube;
    }

    public function index()
    {
        $youtubes = $this->youtube->getAll();

        return response()->json([
            'youtubes' => $youtubes
        ]);
    }

    public function store(YoutubeRequest $request)
    {
        $this->youtube->saveAll($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function show(Youtube $youtube)
    {
        $youtube->user;
        $youtube->increment('view_count');
        return response()->json([
            'youtube' => $youtube
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function edit(Youtube $youtube)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Youtube $youtube)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function destroy(Youtube $youtube)
    {
        $youtube->delete();
    }
}
