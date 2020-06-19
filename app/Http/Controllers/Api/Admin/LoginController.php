<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
    
        $user = Admin::query()->where('email', $request->email)->first();
        if (!$user || !password_verify($request->password, $user->password)) {
            return response([
                'message' => 'These credentials do not match our records.',
                'errors' => [
                    'email' => ['These credentials do not match our records.']
                ]
            ], 422);
        }
    
        Auth::guard('admin')->login($user);

        return compact('user');
    }
}
