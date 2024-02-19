public class Ship
{
  public double Draft;
  public int Crew;

 public Ship(double draft, int crew)
  {
    Draft = draft;
    Crew = crew;
  }
  public bool IsWorthIt(){
    return Draft - Crew * 1.5 > 20;
  }
}