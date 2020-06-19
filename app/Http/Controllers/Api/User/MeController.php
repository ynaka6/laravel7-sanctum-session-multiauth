<?php

namespace App\Http\Controllers\Api\User;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MeController extends Controller
{
    public function __invoke(Request $request): ?User
    {
        return $request->user();
    }
}
