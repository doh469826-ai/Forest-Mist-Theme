import requests
import random

def get_random_pokemon_info():
    base_url = "pokeapi.co"
    
    pokemon_id = random.randint(1, 898) 
    
    api_url = f"{base_url}{pokemon_id}"
    
    print(f"Sending GET request to URL: {api_url}")
    
    try:
        response = requests.get(api_url)
        
        if response.status_code == 200:
            data = response.json()
            
            name = data['name']
            height = data['height'] / 10
            weight = data['weight'] / 10
            abilities = [ability['ability']['name'] for ability in data['abilities']]
            
            print("\n**Information about a random Pokemon:**")
            print(f"Name: {name.capitalize()}")
            print(f"Height: {height} m")
            print(f"Weight: {weight} kg")
            print(f"Abilities: {', '.join(abilities)}")
            
        else:
            print(f"Error retrieving data. Status code: {response.status_code}")

    except requests.exceptions.RequestException as e:
        print(f"A connection error occurred: {e}")

get_random_pokemon_info()
