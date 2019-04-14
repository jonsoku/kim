<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Post extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function postComments()
    {
        return $this->hasMany(PostComment::class);
    }
    public function viewCounter($post)
    {
        $post->increment('view_count');
    }
}
