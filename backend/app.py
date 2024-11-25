from flask import Flask, request, jsonify
from flask_cors import CORS

# Initialize the Flask app
app = Flask(__name__)

# Enable CORS (Cross-Origin Resource Sharing)
CORS(app)

# Mocked weather data for predefined cities
MOCK_WEATHER_DATA = {
    "Jakarta": {
        "temperature": 30,
        "humidity": 85,
        "description": "sunny"
    },
    "London": {
        "temperature": 15,
        "humidity": 70,
        "description": "cloudy"
    },
    "New York": {
        "temperature": 22,
        "humidity": 60,
        "description": "clear sky"
    }
}

# Route to fetch weather data for a specific city
@app.route('/api/weather', methods=['GET'])
def get_weather():
    # Get the city from query parameters
    city = request.args.get('city', '').capitalize()

    # Check if city exists in the mock data
    weather = MOCK_WEATHER_DATA.get(city)
    if weather:
        return jsonify({
            "city": city,
            **weather
        })
    else:
        return jsonify({"error": "City not found"}), 404

# Run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
