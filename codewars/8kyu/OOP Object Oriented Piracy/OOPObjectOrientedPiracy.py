class Ship:
    def __init__(self, draft, crew):
        self.draft = draft
        self.crew = crew
        self.is_worth_it = self.calculate_is_worth_it
        
    def calculate_is_worth_it(self):
       return self.draft - self.crew * 1.5 > 20