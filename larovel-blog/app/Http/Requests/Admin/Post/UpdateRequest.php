<?php

namespace App\Http\Requests\Admin\Post;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string',
            'content'=> 'required|string',
            'category_id'=>'required|exists:categories,id',
            'preview_image'=> 'nullable|file',
            'main_image'=> 'nullable|file',
            'tag_ids'=> 'nullable|array',
            'tag_ids.*'=> 'exists:tags,id',
        ];
    }
    public function messages()
    {
        return[
            'title.required'=>'This input is required',
            'title.string'=>'This input is must be string',
            'content.required'=>'This input is required',
            'preview_image.required'=>'This input is required',
            'preview_image.file'=>'Need to select a file',
            'main_image.required'=>'This input is required',
            'main_image.file'=>'Need to select a file',
            'category_id.required'=>'This input is required',
            'category_id.exists'=>'Id must be in the Database',
            'tag_ids.array'=>'Need to send a data array'
        ];
    }
}
