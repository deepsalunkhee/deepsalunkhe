#include<LiquidCrystal.h>
LiquidCrystal lcd(7, 6, 5, 4, 3, 2);
int Smoke = 0;
int r =0;
int baselineTemp = 0;
int celsius = 0;
int fahrenheit = 0;

void setup()
{
  pinMode(A0, INPUT);
  Serial.begin(9600);
  lcd.begin(16, 2);
  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);
 
}
{
  pinMode(A0, INPUT);
  Serial.begin(9600);

  pinMode(13, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);
}

void loop()
{
  Smoke = analogRead(A0);
  Serial.println(analogRead(A0));
  baselineTemp = 40;
  celsius = map(((analogRead(A0) - 20) * 3.04), 0, 1023, -40, 125);
  
  // convert to Fahrenheit
  fahrenheit = ((celsius * 9) / 5 + 32);
  Serial.print(celsius);
  Serial.print(" C, ");
  Serial.print(fahrenheit);
  Serial.println(" F");
  
  
  if (Smoke >=25 || celsius >= baselineTemp) 
  {
    digitalWrite(13, HIGH);
    digitalWrite(12, LOW);
    tone(13, 523); // play tone 60 (C5 = 523 Hz)
    lcd.setCursor(0,0);
         lcd.print("Emergency exit is right to the elevator");
         delay(100);
         lcd.setCursor(0,1);
         lcd.print("Fire and Rescue Dial 101 immediately");
         lcd.setCursor(1,0);
    
    
    for(r=0;r<36;r++)
     {
         
      lcd.scrollDisplayLeft();
         delay(100);
     }
     
  }
  
  else 
  {
    digitalWrite(13, LOW);
    digitalWrite(12, HIGH);
    lcd.clear();
    noTone(13);
    lcd.setCursor(6,0);
    lcd.print("GOOD");
    lcd.setCursor(6,1);
    lcd.print("DAY:)");
    delay(1000);
    
         
         
      
     
  }
 
  delay(10);
}// Delay a little bit to improve simulation performance