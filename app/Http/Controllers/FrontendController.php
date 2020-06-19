<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class FrontendController extends Controller
{
    public function admin(): View
    {
        return view('admin');
    }

    public function app(): View
    {
        return view('app');
    }
}
