// Set your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWdhcnZyaW5kYSIsImEiOiJjbTNxcjdzdHIwdDJpMnBwazd4emtkNGF2In0.6rNVOQg3dy3UOhhGRClvHw';

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    // Check if the map container exists
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error("Map container 'map' not found!");
        return;
    }

    // Initialize the map
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [0, 20],
        zoom: 2
    });

    // Create popup
    const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('load', () => {
        // Add the GeoJSON source directly
        map.addSource('hashtags', {
            type: 'geojson',
            data: {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-95.7129, 37.0902]
                        },
                        properties: {
                            name: "USA",
                            hashtag: "#BlackLivesMatter",
                            description: "Advocates against systemic racism and police brutality towards Black individuals.",
                            category: "Social Justice",
                            year: "2013",
                            impact: "Sparked a global movement addressing racial injustice."
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#BlackLivesMatter",
                          "description": "Advocates against systemic racism and police brutality towards Black individuals.",
                          "category": "Social Justice",
                          "year": "2013",
                          "impact": "Sparked a global movement addressing racial injustice, leading to widespread protests and policy discussions."
                        },
                        "id": "usa-2013"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#BlackLivesMatter",
                          "description": "Advocates against systemic racism and police brutality towards Black individuals.",
                          "category": "Social Justice",
                          "year": "2013",
                          "impact": "Sparked a global movement addressing racial injustice, leading to widespread protests and policy discussions."
                        },
                        "id": "uk-2013"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            22.9375,
                            -30.5595
                          ]
                        },
                        "properties": {
                          "name": "South Africa",
                          "hashtag": "#BlackLivesMatter",
                          "description": "Advocates against systemic racism and police brutality towards Black individuals.",
                          "category": "Social Justice",
                          "year": "2013",
                          "impact": "Sparked a global movement addressing racial injustice, leading to widespread protests and policy discussions."
                        },
                        "id": "south-africa-2013"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#MeToo",
                          "description": "Raises awareness about sexual harassment and assault, encouraging survivors to share their stories.",
                          "category": "Gender Equality",
                          "year": "2017",
                          "impact": "Led to increased awareness of sexual misconduct, resulting in significant cultural conversations and legal actions."
                        },
                        "id": "usa-2017"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            78.9629,
                            20.5937
                          ]
                        },
                        "properties": {
                          "name": "India",
                          "hashtag": "#MeToo",
                          "description": "Raises awareness about sexual harassment and assault, encouraging survivors to share their stories.",
                          "category": "Gender Equality",
                          "year": "2017",
                          "impact": "Led to increased awareness of sexual misconduct, resulting in significant cultural conversations and legal actions."
                        },
                        "id": "india-2017"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            2.213749,
                            46.227638
                          ]
                        },
                        "properties": {
                          "name": "France",
                          "hashtag": "#MeToo",
                          "description": "Raises awareness about sexual harassment and assault, encouraging survivors to share their stories.",
                          "category": "Gender Equality",
                          "year": "2017",
                          "impact": "Led to increased awareness of sexual misconduct, resulting in significant cultural conversations and legal actions."
                        },
                        "id": "france-2017"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#FridaysForFuture",
                          "description": "Student-led movement demanding action on climate change through school strikes.",
                          "category": "Environmental",
                          "year": "2018",
                          "impact": "Mobilized millions globally to participate in climate strikes, influencing environmental policies and awareness."
                        },
                        "id": "global-2018"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            8.675277,
                            9.081999
                          ]
                        },
                        "properties": {
                          "name": "Nigeria",
                          "hashtag": "#BringBackOurGirls",
                          "description": "Campaign to rescue Nigerian schoolgirls kidnapped by Boko Haram.",
                          "category": "Human Rights",
                          "year": "2014",
                          "impact": "Brought global attention to the abduction, influencing international diplomatic efforts and aid."
                        },
                        "id": "nigeria-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#BringBackOurGirls",
                          "description": "Campaign to rescue Nigerian schoolgirls kidnapped by Boko Haram.",
                          "category": "Human Rights",
                          "year": "2014",
                          "impact": "Brought global attention to the abduction, influencing international diplomatic efforts and aid."
                        },
                        "id": "global-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#ClimateStrike",
                          "description": "Calls for action against climate change, inspired by Greta Thunberg's activism.",
                          "category": "Environmental",
                          "year": "2018",
                          "impact": "Organized global climate strikes, pressuring governments and corporations to adopt sustainable policies."
                        },
                        "id": "global-2018"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#OscarsSoWhite",
                          "description": "Critiques the lack of diversity among Oscar nominees.",
                          "category": "Social Justice",
                          "year": "2015",
                          "impact": "Prompted the Academy to implement changes to increase diversity among its members and nominees."
                        },
                        "id": "usa-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#YesAllWomen",
                          "description": "Highlights the prevalence of misogyny and violence against women.",
                          "category": "Gender Equality",
                          "year": "2014",
                          "impact": "Sparked discussions on women's safety and gender discrimination, influencing feminist movements worldwide."
                        },
                        "id": "usa-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#YesAllWomen",
                          "description": "Highlights the prevalence of misogyny and violence against women.",
                          "category": "Gender Equality",
                          "year": "2014",
                          "impact": "Sparked discussions on women's safety and gender discrimination, influencing feminist movements worldwide."
                        },
                        "id": "global-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#HeForShe",
                          "description": "UN campaign encouraging men to support gender equality.",
                          "category": "Gender Equality",
                          "year": "2014",
                          "impact": "Engaged men in gender equality discussions, leading to commitments from individuals and organizations worldwide."
                        },
                        "id": "global-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#NotOneMore",
                          "description": "Advocates for gun control to prevent mass shootings.",
                          "category": "Political",
                          "year": "2014",
                          "impact": "Influenced gun control debates and policies, mobilizing activists and legislators to address gun violence."
                        },
                        "id": "usa-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#MarchForOurLives",
                          "description": "Student-led movement advocating for gun control legislation.",
                          "category": "Political",
                          "year": "2018",
                          "impact": "Organized nationwide protests, leading to increased dialogue and legislative efforts on gun control."
                        },
                        "id": "usa-2018"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            8.675277,
                            9.081999
                          ]
                        },
                        "properties": {
                          "name": "Nigeria",
                          "hashtag": "#BringBackOurGirls",
                          "description": "Campaign to rescue Nigerian schoolgirls kidnapped by Boko Haram.",
                          "category": "Human Rights",
                          "year": "2014",
                          "impact": "Brought global attention to the abduction, influencing international diplomatic efforts and aid."
                        },
                        "id": "nigeria-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#BringBackOurGirls",
                          "description": "Campaign to rescue Nigerian schoolgirls kidnapped by Boko Haram.",
                          "category": "Human Rights",
                          "year": "2014",
                          "impact": "Brought global attention to the abduction, influencing international diplomatic efforts and aid."
                        },
                        "id": "global-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            8.675277,
                            9.081999
                          ]
                        },
                        "properties": {
                          "name": "Nigeria",
                          "hashtag": "#EndSARS",
                          "description": "Protest against police brutality by Nigeria's Special Anti-Robbery Squad.",
                          "category": "Human Rights",
                          "year": "2020",
                          "impact": "Led to the disbandment of SARS and initiated discussions on police reforms."
                        },
                        "id": "nigeria-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#EndSARS",
                          "description": "Protest against police brutality by Nigeria's Special Anti-Robbery Squad.",
                          "category": "Human Rights",
                          "year": "2020",
                          "impact": "Led to the disbandment of SARS and initiated discussions on police reforms."
                        },
                        "id": "global-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#ThisIsACoup",
                          "description": "Criticism of the stringent Greek bailout demands during the financial crisis.",
                          "category": "Political",
                          "year": "2015",
                          "impact": "Drew international attention to Greece's financial situation, influencing political discourse."
                        },
                        "id": "global-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#YouAintNoMuslimBruv",
                          "description": "British response to a terrorist attack, emphasizing that the attacker does not represent Muslims.",
                          "category": "Social Unity",
                          "year": "2015",
                          "impact": "Promoted unity and challenged stereotypes about Muslims in the UK."
                        },
                        "id": "uk-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#StopFundingHate",
                          "description": "Campaign urging companies to stop advertising in newspapers that promote hate speech.",
                          "category": "Social Justice",
                          "year": "2016",
                          "impact": "Pressured companies to withdraw ads, impacting media revenue and promoting ethical advertising."
                        },
                        "id": "uk-2016"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#DressLikeAWoman",
                          "description": "Response to reports of dress codes imposed on female staff, promoting gender expression freedom.",
                          "category": "Gender Equality",
                          "year": "2017",
                          "impact": "Sparked discussions on workplace attire and gender norms, influencing corporate policies."
                        },
                        "id": "usa-2017"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#DressLikeAWoman",
                          "description": "Response to reports of dress codes imposed on female staff, promoting gender expression freedom.",
                          "category": "Gender Equality",
                          "year": "2017",
                          "impact": "Sparked discussions on workplace attire and gender norms, influencing corporate policies."
                        },
                        "id": "global-2017"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#COVID19",
                          "description": "Information sharing and updates related to the COVID-19 pandemic.",
                          "category": "Health",
                          "year": "2020",
                          "impact": "Facilitated global information dissemination and awareness about the pandemic."
                        },
                        "id": "global-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#AdoptDontShop",
                          "description": "Encourages adopting pets from shelters instead of purchasing from breeders.",
                          "category": "Animal Rights",
                          "year": "2016",
                          "impact": "Increased pet adoptions and raised awareness about the plight of shelter animals."
                        },
                        "id": "usa-2016"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#AdoptDontShop",
                          "description": "Encourages adopting pets from shelters instead of purchasing from breeders.",
                          "category": "Animal Rights",
                          "year": "2016",
                          "impact": "Increased pet adoptions and raised awareness about the plight of shelter animals."
                        },
                        "id": "global-2016"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#NeverAgain",
                          "description": "Student-led movement advocating for gun control following the Parkland school shooting.",
                          "category": "Political",
                          "year": "2018",
                          "impact": "Organized nationwide protests, leading to increased dialogue and legislative efforts on gun control."
                        },
                        "id": "usa-2018"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#HeForShe",
                          "description": "UN campaign encouraging men to support gender equality.",
                          "category": "Gender Equality",
                          "year": "2014",
                          "impact": "Engaged men in gender equality discussions, leading to commitments from individuals and organizations worldwide."
                        },
                        "id": "global-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#StopAsianHate",
                          "description": "Movement against rising anti-Asian hate crimes and discrimination.",
                          "category": "Social Justice",
                          "year": "2021",
                          "impact": "Raised awareness, led to increased reporting of hate crimes, and influenced policy discussions."
                        },
                        "id": "usa-2021"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#StopAsianHate",
                          "description": "Movement against rising anti-Asian hate crimes and discrimination.",
                          "category": "Social Justice",
                          "year": "2021",
                          "impact": "Raised awareness, led to increased reporting of hate crimes, and influenced policy discussions."
                        },
                        "id": "global-2021"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#FreeBritney",
                          "description": "Advocacy for Britney Spears' autonomy from her conservatorship.",
                          "category": "Human Rights",
                          "year": "2021",
                          "impact": "Contributed to legal proceedings ending the conservatorship, highlighting issues of personal freedom."
                        },
                        "id": "usa-2021"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#FreeBritney",
                          "description": "Advocacy for Britney Spears' autonomy from her conservatorship.",
                          "category": "Human Rights",
                          "year": "2021",
                          "impact": "Contributed to legal proceedings ending the conservatorship, highlighting issues of personal freedom."
                        },
                        "id": "global-2021"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#AllEyesOnRafah",
                          "description": "Highlighting the humanitarian crisis in Rafah, Gaza.",
                          "category": "Human Rights",
                          "year": "2024",
                          "impact": "Brought global attention to the conflict, influencing international discourse and humanitarian aid efforts."
                        },
                        "id": "global-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#Blockout2024",
                          "description": "Campaign to block celebrities silent on the Gaza conflict.",
                          "category": "Social Justice",
                          "year": "2024",
                          "impact": "Sparked debates on online activism and celebrity responsibility, leading to increased awareness of the Gaza situation."
                        },
                        "id": "global-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#StopAsianHate",
                          "description": "Movement against rising anti-Asian hate crimes and discrimination.",
                          "category": "Social Justice",
                          "year": "2021",
                          "impact": "Raised awareness, led to increased reporting of hate crimes, and influenced policy discussions."
                        },
                        "id": "usa-2021"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#StopAsianHate",
                          "description": "Movement against rising anti-Asian hate crimes and discrimination.",
                          "category": "Social Justice",
                          "year": "2021",
                          "impact": "Raised awareness, led to increased reporting of hate crimes, and influenced policy discussions."
                        },
                        "id": "global-2021"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#FreeBritney",
                          "description": "Advocacy for Britney Spears' autonomy from her conservatorship.",
                          "category": "Human Rights",
                          "year": "2021",
                          "impact": "Contributed to legal proceedings ending the conservatorship, highlighting issues of personal freedom."
                        },
                        "id": "usa-2021"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#FreeBritney",
                          "description": "Advocacy for Britney Spears' autonomy from her conservatorship.",
                          "category": "Human Rights",
                          "year": "2021",
                          "impact": "Contributed to legal proceedings ending the conservatorship, highlighting issues of personal freedom."
                        },
                        "id": "global-2021"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#AllEyesOnRafah",
                          "description": "Highlighting the humanitarian crisis in Rafah, Gaza.",
                          "category": "Human Rights",
                          "year": "2024",
                          "impact": "Brought global attention to the conflict, influencing international discourse and humanitarian aid efforts."
                        },
                        "id": "global-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#Blockout2024",
                          "description": "Campaign to block celebrities silent on the Gaza conflict.",
                          "category": "Social Justice",
                          "year": "2024",
                          "impact": "Sparked debates on online activism and celebrity responsibility, leading to increased awareness of the Gaza situation."
                        },
                        "id": "global-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#StopWillow",
                          "description": "Opposition to the Willow Project, a major oil drilling venture in Alaska.",
                          "category": "Environmental Activism",
                          "year": "2023",
                          "impact": "Raised awareness, leading to petitions and increased public scrutiny of fossil fuel projects."
                        },
                        "id": "usa-2023"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#StopWillow",
                          "description": "Opposition to the Willow Project, a major oil drilling venture in Alaska.",
                          "category": "Environmental Activism",
                          "year": "2023",
                          "impact": "Raised awareness, leading to petitions and increased public scrutiny of fossil fuel projects."
                        },
                        "id": "global-2023"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#SaveTheAmazon",
                          "description": "Advocacy against deforestation and fires in the Amazon rainforest.",
                          "category": "Environmental Activism",
                          "year": "2022",
                          "impact": "Mobilized international support, pressuring governments to implement stricter conservation policies."
                        },
                        "id": "global-2022"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#ClimateStrikeOnline",
                          "description": "Digital adaptation of school strikes for climate during the COVID-19 pandemic.",
                          "category": "Environmental Activism",
                          "year": "2021",
                          "impact": "Maintained momentum of climate activism through virtual platforms, engaging a global audience."
                        },
                        "id": "global-2021"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#ActOnClimate",
                          "description": "General call to action for climate change mitigation and policy implementation.",
                          "category": "Environmental Activism",
                          "year": "2021-2024",
                          "impact": "Served as a unifying tag for climate action initiatives, fostering global discourse and advocacy."
                        },
                        "id": "global-2021-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#FridaysForFuture",
                          "description": "Youth-led movement initiating school strikes to demand climate action, inspired by Greta Thunberg.",
                          "category": "Environmental Activism",
                          "year": "2021-2024",
                          "impact": "Organized global strikes, influencing policy discussions and raising awareness among younger demographics."
                        },
                        "id": "global-2021-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#ClimateEmergency",
                          "description": "Declaration of the urgent need to address climate change as a crisis.",
                          "category": "Environmental Activism",
                          "year": "2021-2024",
                          "impact": "Prompted governments and organizations to declare climate emergencies, leading to policy commitments."
                        },
                        "id": "global-2021-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#JustStopOil",
                          "description": "Campaign advocating for the cessation of new oil and gas projects.",
                          "category": "Environmental Activism",
                          "year": "2022-2024",
                          "impact": "Organized protests and direct actions, influencing public opinion and policy debates on fossil fuel dependency."
                        },
                        "id": "uk-2022-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#JustStopOil",
                          "description": "Campaign advocating for the cessation of new oil and gas projects.",
                          "category": "Environmental Activism",
                          "year": "2022-2024",
                          "impact": "Organized protests and direct actions, influencing public opinion and policy debates on fossil fuel dependency."
                        },
                        "id": "global-2022-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#SaveOurOceans",
                          "description": "Movement addressing ocean pollution and advocating for marine conservation.",
                          "category": "Environmental Activism",
                          "year": "2021-2024",
                          "impact": "Raised awareness about marine pollution, leading to cleanup initiatives and policy discussions on ocean protection."
                        },
                        "id": "global-2021-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#GenerationRestoration",
                          "description": "Campaign promoting ecosystem restoration to combat climate change and biodiversity loss.",
                          "category": "Environmental Activism",
                          "year": "2021-2024",
                          "impact": "Mobilized global efforts towards ecosystem restoration, influencing policies and on-ground conservation projects."
                        },
                        "id": "global-2021-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#EarthDay2022",
                          "description": "Annual event focusing on environmental protection and climate action.",
                          "category": "Environmental Activism",
                          "year": "2022",
                          "impact": "Engaged millions worldwide in environmental activities, promoting sustainability and policy advocacy."
                        },
                        "id": "global-2022"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            8.675277,
                            9.081999
                          ]
                        },
                        "properties": {
                          "name": "Nigeria",
                          "hashtag": "#EndSARS",
                          "description": "Protest against police brutality by Nigeria's Special Anti-Robbery Squad (SARS).",
                          "category": "Human Rights",
                          "year": "2020",
                          "impact": "Led to the disbandment of SARS and sparked discussions on police reforms."
                        },
                        "id": "nigeria-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#EndSARS",
                          "description": "Protest against police brutality by Nigeria's Special Anti-Robbery Squad (SARS).",
                          "category": "Human Rights",
                          "year": "2020",
                          "impact": "Led to the disbandment of SARS and sparked discussions on police reforms."
                        },
                        "id": "global-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            8.675277,
                            9.081999
                          ]
                        },
                        "properties": {
                          "name": "Nigeria",
                          "hashtag": "#NotTooYoungToRun",
                          "description": "Campaign to lower the age limit for political candidates in Nigeria.",
                          "category": "Political Reform",
                          "year": "2016-2018",
                          "impact": "Resulted in a constitutional amendment reducing age requirements for political offices."
                        },
                        "id": "nigeria-2016-2018"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#FridaysForFuture",
                          "description": "Youth-led movement initiating school strikes to demand climate action, inspired by Greta Thunberg.",
                          "category": "Environmental Activism",
                          "year": "2018-2024",
                          "impact": "Organized global strikes, influencing policy discussions and raising awareness among younger demographics."
                        },
                        "id": "global-2018-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#MeToo",
                          "description": "Movement against sexual harassment and assault, encouraging survivors to share their stories.",
                          "category": "Social Justice",
                          "year": "2017-2024",
                          "impact": "Led to widespread awareness, policy changes, and accountability in various sectors."
                        },
                        "id": "global-2017-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#BlackLivesMatter",
                          "description": "Movement advocating against systemic racism and violence towards Black individuals.",
                          "category": "Social Justice",
                          "year": "2013-2024",
                          "impact": "Influenced policy reforms, raised global awareness, and sparked international protests."
                        },
                        "id": "usa-2013-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#BlackLivesMatter",
                          "description": "Movement advocating against systemic racism and violence towards Black individuals.",
                          "category": "Social Justice",
                          "year": "2013-2024",
                          "impact": "Influenced policy reforms, raised global awareness, and sparked international protests."
                        },
                        "id": "global-2013-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            78.9629,
                            20.5937
                          ]
                        },
                        "properties": {
                          "name": "India",
                          "hashtag": "#AintNoCinderella",
                          "description": "Indian women posted pictures of themselves out late at night to challenge victim-blaming statements suggesting women should adhere to curfews.",
                          "category": "Women's Rights",
                          "year": "2017",
                          "impact": "Highlighted issues of women's freedom and safety, challenging societal norms and victim-blaming."
                        },
                        "id": "india-2017"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            78.9629,
                            20.5937
                          ]
                        },
                        "properties": {
                          "name": "India",
                          "hashtag": "#MenToo",
                          "description": "A movement highlighting issues faced by men, including false accusations and advocating for men's rights.",
                          "category": "Men's Rights",
                          "year": "2018-2019",
                          "impact": "Sparked discussions on men's issues and led to protests advocating for fair treatment in legal cases."
                        },
                        "id": "india-2018-2019"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            78.9629,
                            20.5937
                          ]
                        },
                        "properties": {
                          "name": "India",
                          "hashtag": "#FarmersProtest",
                          "description": "Digital mobilization supporting the farmers' protests against new agricultural laws, amplifying their demands and grievances.",
                          "category": "Agricultural Policy",
                          "year": "2020-2021",
                          "impact": "Amplified the farmers' movement, leading to widespread national and international support and eventual repeal of the laws."
                        },
                        "id": "india-2020-2021"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            78.9629,
                            20.5937
                          ]
                        },
                        "properties": {
                          "name": "India",
                          "hashtag": "#MeTooIndia",
                          "description": "Part of the global #MeToo movement, it encouraged Indian women to share their experiences of sexual harassment and assault.",
                          "category": "Women's Rights",
                          "year": "2018-2024",
                          "impact": "Led to high-profile resignations and increased awareness of workplace harassment in India."
                        },
                        "id": "india-2018-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            78.9629,
                            20.5937
                          ]
                        },
                        "properties": {
                          "name": "India",
                          "hashtag": "#StopAdani",
                          "description": "Movement opposing the Adani Group's coal mining project in Australia, citing environmental concerns, with significant support from Indian environmentalists.",
                          "category": "Environmental Activism",
                          "year": "2017-2024",
                          "impact": "Raised global awareness about the environmental impact of coal mining and pressured financial institutions to reconsider funding."
                        },
                        "id": "india-2017-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            78.9629,
                            20.5937
                          ]
                        },
                        "properties": {
                          "name": "India",
                          "hashtag": "#JusticeForSSR",
                          "description": "Campaign seeking justice for the late actor Sushant Singh Rajput, urging investigations into his death.",
                          "category": "Social Justice",
                          "year": "2020",
                          "impact": "Led to multiple investigations and widespread media coverage, highlighting issues in the entertainment industry."
                        },
                        "id": "india-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            78.9629,
                            20.5937
                          ]
                        },
                        "properties": {
                          "name": "India",
                          "hashtag": "#CAA_NRC_Protests",
                          "description": "Digital activism opposing the Citizenship Amendment Act (CAA) and National Register of Citizens (NRC), perceived as discriminatory.",
                          "category": "Human Rights",
                          "year": "2019-2020",
                          "impact": "Triggered nationwide protests and international scrutiny, leading to discussions on citizenship and secularism in India."
                        },
                        "id": "india-2019-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#AllEyesOnRafah",
                          "description": "A social media campaign drawing global attention to the humanitarian crisis in Rafah, Gaza, amid military conflicts.",
                          "category": "Human Rights",
                          "year": "2024",
                          "impact": "Amplified international awareness and outrage, pressuring global institutions to address the crisis."
                        },
                        "id": "global-2024"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#SOSAmazonia",
                          "description": "Raised awareness about the fires and deforestation in the Amazon rainforest, calling for environmental protection and policy change.",
                          "category": "Environmental Activism",
                          "year": "2019",
                          "impact": "Drew global attention to environmental issues, pressuring governments and organizations to take action."
                        },
                        "id": "global-2019"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#BringBackOurGirls",
                          "description": "A global campaign demanding the return of over 200 Nigerian schoolgirls kidnapped by Boko Haram.",
                          "category": "Human Rights",
                          "year": "2014",
                          "impact": "Mobilized international attention and pressure on governments to act."
                        },
                        "id": "global-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            2.213749,
                            46.227638
                          ]
                        },
                        "properties": {
                          "name": "France",
                          "hashtag": "#JeSuisCharlie",
                          "description": "Expressed solidarity with the victims of the Charlie Hebdo attack and defended freedom of speech.",
                          "category": "Freedom of Speech",
                          "year": "2015",
                          "impact": "Unified global voices in support of free expression and against terrorism."
                        },
                        "id": "france-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#JeSuisCharlie",
                          "description": "Expressed solidarity with the victims of the Charlie Hebdo attack and defended freedom of speech.",
                          "category": "Freedom of Speech",
                          "year": "2015",
                          "impact": "Unified global voices in support of free expression and against terrorism."
                        },
                        "id": "global-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#RefugeesWelcome",
                          "description": "Promoted acceptance and support for refugees during the European migrant crisis.",
                          "category": "Human Rights",
                          "year": "2015",
                          "impact": "Encouraged grassroots support and policy discussions on refugee integration."
                        },
                        "id": "uk-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#MeToo",
                          "description": "Highlighted the prevalence of sexual harassment and assault, encouraging survivors to share their stories.",
                          "category": "Women's Rights",
                          "year": "2017",
                          "impact": "Sparked a global movement leading to increased awareness and policy changes regarding sexual misconduct."
                        },
                        "id": "global-2017"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#FridaysForFuture",
                          "description": "Initiated by Greta Thunberg, this movement advocates for urgent climate action through student strikes.",
                          "category": "Environmental Activism",
                          "year": "2018",
                          "impact": "Led to widespread climate strikes and increased global awareness of climate issues."
                        },
                        "id": "uk-2018"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            2.213749,
                            46.227638
                          ]
                        },
                        "properties": {
                          "name": "France",
                          "hashtag": "#IamHere",
                          "description": "A movement countering hate speech and misinformation online through coordinated positive engagement.",
                          "category": "Anti-Hate Speech",
                          "year": "2016",
                          "impact": "Established a network of activists promoting respectful discourse on social media."
                        },
                        "id": "france-2016"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#BlackLivesMatter",
                          "description": "Addressed systemic racism and violence against Black individuals, gaining traction in Europe following events in the U.S.",
                          "category": "Racial Justice",
                          "year": "2020",
                          "impact": "Prompted discussions and protests addressing racial inequality in European countries."
                        },
                        "id": "uk-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            2.213749,
                            46.227638
                          ]
                        },
                        "properties": {
                          "name": "France",
                          "hashtag": "#BlackLivesMatter",
                          "description": "Addressed systemic racism and violence against Black individuals, gaining traction in Europe following events in the U.S.",
                          "category": "Racial Justice",
                          "year": "2020",
                          "impact": "Prompted discussions and protests addressing racial inequality in European countries."
                        },
                        "id": "france-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#EndSARS",
                          "description": "A movement against police brutality in Nigeria, which gained international support, including from European activists.",
                          "category": "Human Rights",
                          "year": "2020",
                          "impact": "Raised global awareness and led to protests supporting the call to end police brutality."
                        },
                        "id": "uk-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#KnowYourMil",
                          "description": "A U.S. Department of Defense campaign aimed at increasing public awareness and understanding of military operations and personnel.",
                          "category": "Public Awareness",
                          "year": "2018",
                          "impact": "Enhanced public knowledge about military life and operations, fostering a stronger connection between the military and civilians."
                        },
                        "id": "usa-2018"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#WeTheNavy",
                          "description": "A U.S. Navy recruitment campaign showcasing the diverse roles and opportunities within the Navy.",
                          "category": "Recruitment",
                          "year": "2019",
                          "impact": "Attracted potential recruits by highlighting personal stories and career paths, contributing to recruitment goals."
                        },
                        "id": "usa-2019"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#ArmyTeam",
                          "description": "A U.S. Army campaign promoting teamwork and the diverse skill sets within the Army.",
                          "category": "Recruitment",
                          "year": "2020",
                          "impact": "Strengthened the Army's brand identity and appealed to individuals seeking a sense of community and purpose."
                        },
                        "id": "usa-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#KnowYourArmy",
                          "description": "A British Army campaign aimed at challenging stereotypes and increasing awareness of Army roles.",
                          "category": "Public Awareness",
                          "year": "2019",
                          "impact": "Addressed misconceptions about military life, leading to increased interest and applications."
                        },
                        "id": "uk-2019"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#ProtectOurDefenders",
                          "description": "A campaign advocating for the rights and protection of military personnel, focusing on issues like sexual assault within the ranks.",
                          "category": "Advocacy",
                          "year": "2013",
                          "impact": "Raised awareness about internal challenges, leading to policy changes and support systems for affected personnel."
                        },
                        "id": "usa-2013"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#NoDAPL",
                          "description": "A campaign against the Dakota Access Pipeline, highlighting environmental and indigenous rights issues.",
                          "category": "Environmental Activism",
                          "year": "2016",
                          "impact": "Brought global attention to indigenous rights and environmental protection, leading to widespread protests and policy reviews."
                        },
                        "id": "usa-2016"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#DefendTheSacred",
                          "description": "Associated with the Standing Rock protests, emphasizing the protection of sacred indigenous lands.",
                          "category": "Indigenous Rights",
                          "year": "2016",
                          "impact": "Strengthened indigenous activism and solidarity movements worldwide, fostering greater awareness of indigenous sovereignty issues."
                        },
                        "id": "usa-2016"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#VeteransForStandingRock",
                          "description": "Veterans showing solidarity with the Standing Rock Sioux Tribe against the Dakota Access Pipeline.",
                          "category": "Veteran Advocacy",
                          "year": "2016",
                          "impact": "Highlighted the role of veterans in social justice movements, bridging military and civilian activism."
                        },
                        "id": "usa-2016"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#BeautyTok",
                          "description": "A segment of TikTok where users share beauty tips, product reviews, and tutorials.",
                          "category": "Community Engagement",
                          "year": "2023",
                          "impact": "Elevated numerous beauty products to viral status, significantly influencing consumer purchasing behaviors."
                        },
                        "id": "global-2023"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#SephoraSquad",
                          "description": "Sephora's brand-ambassador program partnering with beauty influencers to promote products.",
                          "category": "Influencer Collaboration",
                          "year": "2019",
                          "impact": "Amplified brand reach through authentic influencer content, though faced scrutiny over selection processes."
                        },
                        "id": "usa-2019"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#AerieReal",
                          "description": "Aerie's campaign showcasing unretouched models to promote body positivity and inclusivity.",
                          "category": "Body Positivity",
                          "year": "2017",
                          "impact": "Challenged industry norms by embracing natural beauty, leading to increased brand loyalty and sales."
                        },
                        "id": "usa-2017"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#FentyBeauty",
                          "description": "Rihanna's beauty brand emphasizing inclusivity with a wide range of shades for all skin tones.",
                          "category": "Inclusivity",
                          "year": "2017",
                          "impact": "Set a new industry standard for diversity, prompting other brands to expand their shade ranges."
                        },
                        "id": "global-2017"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#DoveRealBeauty",
                          "description": "Dove's campaign featuring real women to challenge beauty stereotypes and promote self-esteem.",
                          "category": "Body Positivity",
                          "year": "2004",
                          "impact": "Sparked conversations about real beauty, influencing marketing strategies across the industry."
                        },
                        "id": "global-2004"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -95.7129,
                            37.0902
                          ]
                        },
                        "properties": {
                          "name": "USA",
                          "hashtag": "#BlackGirlMagic",
                          "description": "Celebrates the beauty and resilience of Black women, promoting representation and empowerment.",
                          "category": "Cultural Empowerment",
                          "year": "2013",
                          "impact": "Fostered a community celebrating Black women's achievements and beauty, influencing brand campaigns and product lines."
                        },
                        "id": "usa-2013"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#BlackGirlMagic",
                          "description": "Celebrates the beauty and resilience of Black women, promoting representation and empowerment.",
                          "category": "Cultural Empowerment",
                          "year": "2013",
                          "impact": "Fostered a community celebrating Black women's achievements and beauty, influencing brand campaigns and product lines."
                        },
                        "id": "global-2013"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#AsianBeauty",
                          "description": "A community sharing insights and products related to Asian skincare and beauty routines.",
                          "category": "Community Engagement",
                          "year": "2015",
                          "impact": "Increased global interest in K-beauty and J-beauty products, impacting global beauty trends and product offerings."
                        },
                        "id": "global-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#BodyPositivity",
                          "description": "A movement advocating for the acceptance of all body types, challenging traditional beauty standards.",
                          "category": "Social Movement",
                          "year": "2012",
                          "impact": "Encouraged brands to feature diverse body types, leading to more inclusive marketing and product development."
                        },
                        "id": "global-2012"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#SkincareRoutine",
                          "description": "Users share their daily skincare practices, product recommendations, and tips.",
                          "category": "Community Engagement",
                          "year": "2018",
                          "impact": "Educated consumers on skincare, driving demand for specific products and transparency in ingredient sourcing."
                        },
                        "id": "global-2018"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#CleanBeauty",
                          "description": "Promotes the use of beauty products free from harmful chemicals, emphasizing natural ingredients.",
                          "category": "Environmental Awareness",
                          "year": "2015",
                          "impact": "Led to a surge in demand for clean beauty products, prompting brands to reformulate products and adopt sustainable practices."
                        },
                        "id": "global-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#GoProAwards",
                          "description": "GoPro's initiative encouraging users to share their best content for a chance to win awards.",
                          "category": "User-Generated Content",
                          "year": "2015",
                          "impact": "Fostered a community of content creators, enhancing brand loyalty and showcasing product capabilities."
                        },
                        "id": "global-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#ShotOniPhone",
                          "description": "Apple's campaign showcasing photos taken by iPhone users, highlighting camera quality.",
                          "category": "User-Generated Content",
                          "year": "2015",
                          "impact": "Demonstrated the iPhone's camera capabilities, influencing consumer perceptions and driving sales."
                        },
                        "id": "global-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#LikeAGirl",
                          "description": "Always' campaign challenging gender stereotypes, encouraging confidence in young girls.",
                          "category": "Social Awareness",
                          "year": "2014",
                          "impact": "Sparked global conversations about gender norms, enhancing brand image and social responsibility."
                        },
                        "id": "global-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#PlayInside",
                          "description": "Nike's campaign encouraging people to stay active indoors during the COVID-19 pandemic.",
                          "category": "Health & Wellness",
                          "year": "2020",
                          "impact": "Promoted health and safety during lockdowns, reinforcing brand commitment to well-being."
                        },
                        "id": "global-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#ShareACoke",
                          "description": "Coca-Cola's personalized campaign encouraging sharing and personalization.",
                          "category": "Consumer Engagement",
                          "year": "2014",
                          "impact": "Increased brand engagement and sales through personalized consumer experiences."
                        },
                        "id": "global-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#BringBackOurGirls",
                          "description": "A campaign demanding the return of over 200 Nigerian schoolgirls kidnapped by Boko Haram.",
                          "category": "Human Rights",
                          "year": "2014",
                          "impact": "Mobilized international attention and pressure on governments to act."
                        },
                        "id": "global-2014"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            2.213749,
                            46.227638
                          ]
                        },
                        "properties": {
                          "name": "France",
                          "hashtag": "#JeSuisCharlie",
                          "description": "Expressed solidarity with the victims of the Charlie Hebdo attack and defended freedom of speech.",
                          "category": "Freedom of Speech",
                          "year": "2015",
                          "impact": "Unified global voices in support of free expression and against terrorism."
                        },
                        "id": "france-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#JeSuisCharlie",
                          "description": "Expressed solidarity with the victims of the Charlie Hebdo attack and defended freedom of speech.",
                          "category": "Freedom of Speech",
                          "year": "2015",
                          "impact": "Unified global voices in support of free expression and against terrorism."
                        },
                        "id": "global-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#RefugeesWelcome",
                          "description": "Promoted acceptance and support for refugees during the European migrant crisis.",
                          "category": "Human Rights",
                          "year": "2015",
                          "impact": "Encouraged grassroots support and policy discussions on refugee integration."
                        },
                        "id": "uk-2015"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#MeToo",
                          "description": "Highlighted the prevalence of sexual harassment and assault, encouraging survivors to share their stories.",
                          "category": "Women's Rights",
                          "year": "2017",
                          "impact": "Sparked a global movement leading to increased awareness and policy changes regarding sexual misconduct."
                        },
                        "id": "global-2017"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#FridaysForFuture",
                          "description": "Initiated by Greta Thunberg, this movement advocates for urgent climate action through student strikes.",
                          "category": "Environmental Activism",
                          "year": "2018",
                          "impact": "Led to widespread climate strikes and increased global awareness of climate issues."
                        },
                        "id": "uk-2018"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            2.213749,
                            46.227638
                          ]
                        },
                        "properties": {
                          "name": "France",
                          "hashtag": "#IamHere",
                          "description": "A movement countering hate speech and misinformation online through coordinated positive engagement.",
                          "category": "Anti-Hate Speech",
                          "year": "2016",
                          "impact": "Established a network of activists promoting respectful discourse on social media."
                        },
                        "id": "france-2016"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#BlackLivesMatter",
                          "description": "Addressed systemic racism and violence against Black individuals, gaining traction in Europe following events in the U.S.",
                          "category": "Racial Justice",
                          "year": "2020",
                          "impact": "Prompted discussions and protests addressing racial inequality in European countries."
                        },
                        "id": "uk-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            2.213749,
                            46.227638
                          ]
                        },
                        "properties": {
                          "name": "France",
                          "hashtag": "#BlackLivesMatter",
                          "description": "Addressed systemic racism and violence against Black individuals, gaining traction in Europe following events in the U.S.",
                          "category": "Racial Justice",
                          "year": "2020",
                          "impact": "Prompted discussions and protests addressing racial inequality in European countries."
                        },
                        "id": "france-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            -3.435973,
                            55.378051
                          ]
                        },
                        "properties": {
                          "name": "UK",
                          "hashtag": "#EndSARS",
                          "description": "A movement against police brutality in Nigeria, which gained international support, including from European activists.",
                          "category": "Human Rights",
                          "year": "2020",
                          "impact": "Raised global awareness and led to protests supporting the call to end police brutality."
                        },
                        "id": "uk-2020"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#Gaming",
                          "description": "A general hashtag encompassing all gaming-related content, widely used across social media platforms.",
                          "category": "General Gaming",
                          "year": "Ongoing",
                          "impact": "Facilitates discovery and engagement among gaming enthusiasts."
                        },
                        "id": "global-Ongoing"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#Gamer",
                          "description": "Used by individuals identifying as gamers to share experiences, setups, and gaming content.",
                          "category": "Community Engagement",
                          "year": "Ongoing",
                          "impact": "Fosters a sense of community among gamers worldwide."
                        },
                        "id": "global-Ongoing"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#GamingCommunity",
                          "description": "Highlights content related to the gaming community, including events, discussions, and collaborations.",
                          "category": "Community Engagement",
                          "year": "Ongoing",
                          "impact": "Strengthens connections within the gaming community."
                        },
                        "id": "global-Ongoing"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#GamingSetup",
                          "description": "Showcases personal gaming setups, including hardware, furniture, and aesthetics.",
                          "category": "Lifestyle",
                          "year": "Ongoing",
                          "impact": "Inspires gamers to enhance their own setups and share ideas."
                        },
                        "id": "global-Ongoing"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#GamingMemes",
                          "description": "Shares humorous content related to gaming culture and experiences.",
                          "category": "Entertainment",
                          "year": "Ongoing",
                          "impact": "Provides entertainment and fosters a shared culture among gamers."
                        },
                        "id": "global-Ongoing"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#GamingNews",
                          "description": "Disseminates news and updates about the gaming industry, including game releases and events.",
                          "category": "Information Sharing",
                          "year": "Ongoing",
                          "impact": "Keeps the community informed about industry developments."
                        },
                        "id": "global-Ongoing"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#GamingLife",
                          "description": "Shares aspects of daily life related to gaming, including habits, experiences, and personal stories.",
                          "category": "Lifestyle",
                          "year": "Ongoing",
                          "impact": "Highlights the integration of gaming into daily life."
                        },
                        "id": "global-Ongoing"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#GamingAddict",
                          "description": "Used by individuals to express their passion for gaming.",
                          "category": "Personal Expression",
                          "year": "Ongoing",
                          "impact": "Allows gamers to connect over shared enthusiasm."
                        },
                        "id": "global-Ongoing"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#GamingChannel",
                          "description": "Promotes personal gaming channels on platforms like YouTube and Twitch.",
                          "category": "Content Promotion",
                          "year": "Ongoing",
                          "impact": "Assists content creators in reaching wider audiences."
                        },
                        "id": "global-Ongoing"
                      },
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [
                            0,
                            0
                          ]
                        },
                        "properties": {
                          "name": "Global",
                          "hashtag": "#GamingCommunity",
                          "description": "Connects gamers to discussions, events, and collaborative content within the gaming sphere.",
                          "category": "Community Engagement",
                          "year": "Ongoing",
                          "impact": "Strengthens community bonds and facilitates networking."
                        },
                        "id": "global-Ongoing"
                      }
                    // Add more features here as needed
                ]
            }
        });

        // Add the point layer
        map.addLayer({
            id: 'points',
            type: 'circle',
            source: 'hashtags',
            paint: {
                'circle-radius': 8,
                'circle-color': [
                    'match',
                    ['get', 'category'],
                    'Social Justice', '#FF5733',
                    'Environmental', '#33FF57',
                    'Human Rights', '#3357FF',
                    'Gender Equality', '#FF33F6',
                    'Political', '#FFB533',
                    '#888888'
                ],
                'circle-opacity': 0.8,
                'circle-stroke-width': 1,
                'circle-stroke-color': '#ffffff'
            }
        });

        // Add hover interaction
        map.on('mouseenter', 'points', (e) => {
            map.getCanvas().style.cursor = 'pointer';

            const coordinates = e.features[0].geometry.coordinates.slice();
            const { name, hashtag, description, category, year, impact } = e.features[0].properties;

            const popupContent = `
                <h3>${name}</h3>
                <p><strong>${hashtag}</strong></p>
                <p>${description}</p>
                <p><strong>Category:</strong> ${category}</p>
                <p><strong>Year:</strong> ${year}</p>
                <p><strong>Impact:</strong> ${impact}</p>
            `;

            popup.setLngLat(coordinates)
                .setHTML(popupContent)
                .addTo(map);
        });

        map.on('mouseleave', 'points', () => {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });

        // Log to verify data is loaded
        console.log('Layer added:', map.getLayer('points'));
        console.log('Source data:', map.getSource('hashtags')._data);
    });

    // Filter and summary logic
    let selectedYears = new Set();
    let selectedCategories = new Set();

    function updateFilters() {
        console.log('Selected Years:', selectedYears);
        console.log('Selected Categories:', selectedCategories);
        if (!map.getLayer('points')) return;

        const filters = ['all'];

        if (selectedYears.size > 0) {
            filters.push(['match', ['get', 'year'], [...selectedYears], true, false]);
        }

        if (selectedCategories.size > 0) {
            filters.push(['match', ['get', 'category'], [...selectedCategories], true, false]);
        }

        console.log('Constructed Filters:', filters);
        map.setFilter('points', filters.length > 1 ? filters : null);

        generateSummary();
    }

    async function generateSummary() {
        console.log("generateSummary called!");
        const years = Array.from(selectedYears).join(', ') || 'all years';
        const categories = Array.from(selectedCategories).join(', ') || 'all categories';

        const summaryDiv = document.getElementById('generated-summary');
        if (!summaryDiv) {
            console.error("Summary div not found!");
            return;
        }

        console.log(`Generating summary for years: ${years}, categories: ${categories}`);
        summaryDiv.innerHTML = "Generating summary...";

        try {
            const response = await fetch('http://localhost:50184/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: `Summarize movements from years: (${years}) and categories: (${categories}).`
                })
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("API Response:", data);

            summaryDiv.innerHTML = `<p>${data.text}</p>`;
        } catch (error) {
            console.error("Error generating summary:", error);
            summaryDiv.innerHTML = `<p style="color:red;">Failed to generate summary. Please try again.</p>`;
        }
    }

    function initializeUI() {
        const yearSelect = document.getElementById('year-select');
        const categorySelect = document.getElementById('category-select');
        const summaryDiv = document.getElementById('generated-summary');

        if (!yearSelect || !categorySelect || !summaryDiv) {
            console.error("One or more elements (year-select, category-select, generated-summary) are missing from the DOM.");
            return;
        }

        yearSelect.addEventListener('change', (e) => {
            selectedYears = new Set(Array.from(e.target.selectedOptions).map(option => option.value));
            updateFilters();
        });

        categorySelect.addEventListener('change', (e) => {
            selectedCategories = new Set(Array.from(e.target.selectedOptions).map(option => option.value));
            updateFilters();
        });

        if (!selectedYears.size && !selectedCategories.size) {
            summaryDiv.innerHTML = "Please select filters to generate a summary.";
        }
    }

    // Initialize UI
    initializeUI();
});
