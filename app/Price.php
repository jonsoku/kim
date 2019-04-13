<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Price extends Model
{
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function getPrices(){
        $prices = self::all();
        return $prices;
    }

    public function saveAll($request){
        $user = $request->user();
        $user->prices()->create($request->all());
    }
}
