public class Ship {
  private final double draft;
  private final int crew;
  private final boolean isWorthIt;
    
  public Ship(double draft, int crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = this.draft - this.crew * 1.5 > 20;
  }
  public boolean isWorthIt(){
    return isWorthIt;
  }
 } 