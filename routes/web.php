<?php
Auth::routes();
Route::group(['middleware' => ['auth']], function () {
    Route::get('/', 'MainController@index');
    Route::resource('posts', 'PostController');
    Route::resource('posts.postComments', 'PostCommentController');
    Route::get('/myPosts', 'PostController@myIndex');
    Route::resource('prices', 'PriceController');
    Route::resource('youtubes', 'YoutubeController');
    Route::resource('boards', 'BoardController');
});
