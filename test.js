function duplicates(tableau)
{
  let count = 0;
  for (let i = 1; i < tableau[0]; i++)
  {
    for (let j = i + 1; j < tableau[0]; j++)
    {
      if (tableau[i] == tableau[j])
      {
        count++;
      }
    }
    if (count == 2)
    {
      return tableau[i];
    }
    count = 0;
  }
  return "None";
}



let list = [6, "rocket", "boosters", "rocket", "fire", "rocket"] 
console.log(duplicates(list))
