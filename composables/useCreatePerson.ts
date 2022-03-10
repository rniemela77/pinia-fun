import { ref, computed } from "vue";

export function useCreatePerson() {
  const generateName = () => {
    let name = "";
    const characters = "BCDFGHJKLMNPQRSTVWXZAEIOU";
    const consonants = "BCDFGHJKLMNPQRSTVWXZ";
    const vowels = "AEIOU";
    name += consonants.charAt(Math.floor(Math.random() * consonants.length));
    name += vowels
      .charAt(Math.floor(Math.random() * vowels.length))
      .toLowerCase();
    name += consonants
      .charAt(Math.floor(Math.random() * consonants.length))
      .toLowerCase();
    name += characters
      .charAt(Math.floor(Math.random() * characters.length))
      .toLowerCase();
    name += vowels
      .charAt(Math.floor(Math.random() * vowels.length))
      .toLowerCase();
    name += characters
      .charAt(Math.floor(Math.random() * characters.length))
      .toLowerCase();
    return name;
  };

  const generateAge = () => {
    return Math.floor(Math.random() * 80);
  };

  const generatePerson = () => {
    return { name: generateName(), age: generateAge() };
  };

  return { generatePerson, generateName, generateAge };
}
