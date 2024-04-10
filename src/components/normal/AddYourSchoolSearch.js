import React, { useState, useRef } from 'react'
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

const AddYourSchoolSearch = ({setAddressResult}) => {

    const [input, setInput] = useState(''); 


    const handleSelectAddress = (address) => {
      setInput(address);
    };
    

    
    const handleSelect = (address, placeId) => {
      //  console.log(address, placeId, "address, placeId");
       geocodeByPlaceId(placeId).then((selectedAddress) => { 
        // console.log(selectedAddress, 'success');
        let addressResult = { address1: '' }
        addressResult.latitude = `${selectedAddress[0].geometry?.location.lat()}}`
        addressResult.longtitude = `${selectedAddress[0].geometry?.location.lng()}`
        addressResult.name = address.split(',')[0] 
        addressResult.place_id = selectedAddress[0].place_id
        addressResult.latitude = addressResult.latitude.replace(/[{}]/g, '');
        addressResult.longtitude = addressResult.longtitude.replace(/[{}]/g, '');
        
        selectedAddress[0].address_components?.length && selectedAddress[0].address_components.forEach((address) => { 
          // console.log(address, "ADDDDDRESS");
        if (address.types.includes('street_number')) addressResult.address1 = address.long_name; 
        if (address.types.includes('route')) addressResult.address1 = addressResult.address1 + address.long_name + ' , '; 
        if (address.types.includes('sublocality_level_3')) addressResult.address1 = addressResult.address1 + address.long_name + ' , '; 
        if (address.types.includes('sublocality_level_2')) addressResult.address1 = addressResult.address1 + address.long_name + ' , '; 
        if (address.types.includes('sublocality_level_1')) addressResult.address1 = addressResult.address1 + address.long_name; 
        if (address.types.includes('locality')) addressResult.city = address.long_name; 
        if (address.types.includes('administrative_area_level_3')) addressResult.city = address.long_name; 
        if (address.types.includes('administrative_area_level_1')) addressResult.state = address.long_name; 
        if (address.types.includes('postal_code')) addressResult.postal_code = address.long_name; });

        setAddressResult(addressResult)
        setInput(addressResult.name)
       })
    }


  return (
  <>
  <div> 
    <PlacesAutocomplete  searchOptions={{ apiKey: process.env.REACT_GOOGLE_MAP_KEY }} name='address1' value={input} onSelect={handleSelect} 
    onChange={handleSelectAddress}
    > 
    {({ getInputProps, suggestions, getSuggestionItemProps }) => (<div className='search-input-container col-12 p-0 mb-4'> 
    <input 
    {...getInputProps({ 
      placeholder: 'Search School', 
    className: 'form-control shadow-none form-bg-none', 
    })} 
    /> 
    <div className='autocomplete-container bg-light'> 
    {suggestions.map((suggestion) => 
    { const className = 'suggestion-item';
     return ( 
     <div 
     {...getSuggestionItemProps(suggestion, { className, })} 
     className='form-control shadow-none form-bg-none'> 
     <span>{suggestion.description}</span> 
     </div> ); })} 
     </div> 
     </div>)} 
     </PlacesAutocomplete> 
    </div>
  </>
  )
}

export default AddYourSchoolSearch