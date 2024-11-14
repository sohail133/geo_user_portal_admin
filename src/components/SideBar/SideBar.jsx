import React from "react";
import { IoClose } from "react-icons/io5";
const SideBar = ({
  handleCloseSlide,
  cities,
  continents,
  states,
  countries,
  setFilter,
  filter,
  setPage,
}) => {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-action" onClick={handleCloseSlide}>
          <IoClose size={24} color="#212427" />
        </div>

        <section className="sidebar-form">
          <h2>Filter </h2>
          <p>
            Search the user by applying filter for the country, city, continent
            & state.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="city">City</label>
              <select
                id="city"
                onChange={(e) => {
                  setFilter((prevState) => ({
                    ...prevState,
                    filterCities:
                      cities.find((c) => c.name === e.target.value)?.id || null,
                  }));
                  setPage(1);
                }}
                value={
                  cities.find((c) => c.id === filter.filterCities)?.name || ""
                }
                className="filter-select"
                name="city"
              >
                <option value="" selected={true} disabled={true}>
                  -- Select City --
                </option>
                {cities?.map((city) => (
                  <option value={city.name} key={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={
                  countries.find((c) => c.id === filter.filterCountries)
                    ?.name || ""
                }
                onChange={(e) => {
                  setFilter((prevState) => ({
                    ...prevState,
                    filterCountries:
                      countries.find((c) => c.name === e.target.value)?.id ||
                      null,
                  }));
                  setPage(1);
                }}
              >
                <option value="" selected={true} disabled={true}>
                  -- Select Country --
                </option>
                {countries?.map((country) => (
                  <option value={country.name} key={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="state">State</label>
              <select
                id="state"
                name="state"
                value={
                  states.find((c) => c.id === filter.filterStates)?.name || ""
                }
                onChange={(e) => {
                  setFilter((prevState) => ({
                    ...prevState,
                    filterStates:
                      states.find((c) => c.name === e.target.value)?.id || null,
                  }));
                  setPage(1);
                }}
              >
                <option value="" selected={true} disabled={true}>
                  -- Select State --
                </option>
                {states?.map((state) => (
                  <option value={state.name} key={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="continent">Continent</label>
              <select
                id="continent"
                onChange={(e) => {
                  setFilter((prevState) => ({
                    ...prevState,
                    filterContinents:
                      continents.find((c) => c.name === e.target.value)?.id ||
                      null,
                  }));
                  setPage(1);
                }}
                value={
                  continents.find((c) => c.id === filter.filterContinents)
                    ?.name || ""
                }
                name="continent"
              >
                <option value="" selected={true} disabled={true}>
                  -- Select Continent --
                </option>
                {continents?.map((continent) => (
                  <option value={continent.name} key={continent.id}>
                    {continent.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </section>
      </div>
      <div className="sidebar-overlay" />
    </>
  );
};

export default SideBar;
