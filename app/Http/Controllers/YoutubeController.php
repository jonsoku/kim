<?php

namespace App\Http\Controllers;

use App\Youtube;
use Illuminate\Http\Request;

class YoutubeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Youtube  $youtube
     * @return \Illuminate\Http\Response
     */
    public function show(Youtube $youtube)
    {
        //
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
        //
    }
}
