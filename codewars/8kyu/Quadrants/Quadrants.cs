using System;

public static class Kata
{
  public static int Quadrant(int x, int y)
  {
    return x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;
  }
}