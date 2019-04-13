<?php

namespace App\Http\Controllers;

use App\Price;
use Illuminate\Http\Request;
use App\Http\Requests\PriceRequest;

class PriceController extends Controller
{
    public function __construct(Price $price)
    {
        $this->price = $price;
    }

    public function index()
    {
        $prices = $this->price->getPrices();

        return response()->json([
            'prices' => $prices
        ]);
    }

    public function create()
    {
        //
    }
    
    public function store(PriceRequest $request)
    {
        $user = $request->user();
        $user->prices()->create($request->all());
    }

    public function show(Price $price)
    {
        //
    }

    public function edit(Price $price)
    {
        //
    }

    public function update(Request $request, Price $price)
    {
        //
    }

    public function destroy(Price $price)
    {
        //
    }
}
