<?php

namespace App\Http\Controllers;

use App\Board;
use Illuminate\Http\Request;

class BoardController extends Controller
{

    public function __construct(Board $board)
    {
        $this->board = $board;
    }

    public function index()
    {
        $boards = $this->board->getAll();

        return response()->json([
            'boards' => $boards
        ]);
    }

    public function store(Request $request)
    {
        $this->board->saveAll($request);
    }

    public function show(Board $board)
    {
        $board->user;
        $board->increment('view_count');
        return response()->json([
            'board' => $board
        ]);
    }

    public function edit(Board $board)
    {
        //
    }

    public function update(Request $request, Board $board)
    {
        //
    }

    public function destroy(Board $board)
    {
        //
    }
}
