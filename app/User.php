<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

use App\Post;
use App\PostComment;
use App\Price;
use App\Youtube;
use App\Board;
use App\BoardLike;


class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function posts()
    {
        return $this->hasMany(Post::class);
    }
    public function postComments()
    {
        return $this->hasMany(PostComment::class);
    }


    public function prices()
    {
        return $this->hasMany(Price::class);
    }

    public function youtubes()
    {
        return $this->hasMany(Youtube::class);
    }

    public function boards(){
        return $this->hasMany(Board::class);
    }

    public function boardLikes(){
        return $this->hasMany(BoardLike::class);
    }

    //helper
    public function isAdmin()
    {
        return $this->id === 1;
    }
}
