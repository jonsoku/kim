<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Board;

class BoardLike extends Model
{
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function board(){
        return $this->belongsTo(Board::class);
    }
}
