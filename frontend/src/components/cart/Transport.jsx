import React from "react";
import {Country, State} from "country-state-city"

const Transport = () => {
  return (
    <section className="transport">
      <main>
        <h1>Delivery Details</h1>
        <form>
          <div>
            <label>H.No</label>
            <input type="text" placeholder="Enter House No" />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Country</option>
              {
                Country && Country.getAllCountries().map(i=> (
                  <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                ))
              }
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {
                State && State.getStatesOfCountry("NG").map(i=> (
                  <option value={i.isoCode}>{i.name}</option>
                ))
              }
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone No</label>
            <input type="number" placeholder="Enter Phone Number" />
          </div>
          <input type="submit" value="Confirm Order" onclick="return true" />
        </form>
      </main>
    </section>
  );
};

export default Transport;
