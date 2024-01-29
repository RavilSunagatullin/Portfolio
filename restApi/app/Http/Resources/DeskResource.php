<?php

namespace App\Http\Resources;

use App\Models\DeskList;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DeskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
       return [
           'id' => $this->id,
           'name'=>$this->name,
           'lists'=>DeskListResource::collection($this->lists),
           'created_at'=>$this->created_at,
       ];
    }
}
