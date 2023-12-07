//js
maps = x => x.map(el => el * 2)

//ts
`export function maps(x: number[]): number[]{
  return x.map(el => el * 2)
}`

//php
function maps($x)
{
  $map_array = array_map(function($el) {
    return $el * 2;
  }, $x);
    return $map_array;
}

//python
`def maps(a):
    a = list(map(lambda x: x * 2, a))
    return a`

