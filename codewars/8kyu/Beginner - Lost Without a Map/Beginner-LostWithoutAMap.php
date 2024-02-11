function maps($x)
{
  $map_array = array_map(function($el) {
    return $el * 2;
  }, $x);
    return $map_array;
}