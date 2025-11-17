"use client"
import { MapPin } from 'lucide-react';
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

function GoogleAddressSearch({selectedAddress,setCoordinates}) {
  return (
    <div className='flex items-center w-full'>
        <MapPin className='h-10 w-10 p-2 rounded-l-lg text-primary bg-purple-200'/>
          <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
            selectProps={{
                placeholder:'Search Property Address',
                isClearable:true,
                className:'w-full',
                onChange:(place)=>{
                    console.log(place);
                    selectedAddress(place); // Send the selection (or null) to the parent

                    // --- FIX IS HERE ---
                    // Only run geocoding if 'place' is not null
                    if (place) {
                        geocodeByAddress(place.label)
                        .then(result=>getLatLng(result[0]))
                        .then(({lat,lng})=>{
                        
                            setCoordinates({lat,lng})
                        })
                    } else {
                        // (Optional but recommended)
                        // If the place is cleared, clear the coordinates
                        setCoordinates(null); 
                    }
                    // --- END OF FIX ---
                }
            }}
        
        />
    </div>
  )
}

export default GoogleAddressSearch