<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\BoardLike;

class Board extends Model
{
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function boardLikes(){
        return $this->hasMany(BoardLike::class);
    }

    public function getAll(){
        $boards = self::with('user')->latest()->get();
        return $boards;
    }

    public function saveAll($request){
        $user = $request->user();
        $user->boards()->create($request->all());
    }
}
