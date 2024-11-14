import React, { useState } from "react";
import Table from "../../components/Table/Table";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Layout/Header/Header";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch";
import Button from "../../components/Button/Button";
import { FaFilter } from "react-icons/fa";
import { headlines } from "../../utils/data";

const Dashboard = () => {
  /****** State *****/
  const [slideOpen, setSlideOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    filterCities: null,
    filterContinents: null,
    filterCountries: null,
    filterStates: null,
  });

  /*********** Custom Hook *****************/
  const { data: rows, loading: userLoading } = useFetch("/users", {
    page,
    city_id: filter.filterCities,
    country_id: filter.filterCountries,
    continent_id: filter.filterContinents,
    state_id: filter.filterStates,
  });
  const { data: cities, loading: citiesLoading } = useFetch("/cities");
  const { data: countries, loading: countriesLoading } = useFetch("/countries");
  const { data: states, loading: statesLoading } = useFetch("/states");
  const { data: continents, loading: continentsLoading } =
    useFetch("/continents");

  const handleCloseSlide = () => setSlideOpen(false);
  const handleChangePage = (page) => setPage(page);

  if (
    userLoading ||
    citiesLoading ||
    countriesLoading ||
    statesLoading ||
    continentsLoading
  ) {
    return <Loading />;
  }

  return (
    <div className="container">
      {/********HEADER********/}
      <Header />

      <main>
        {/********MAIN TABLE********/}
        <Table headlines={headlines} rows={rows.data} />

        {/*********FILTER SIDE BAR******/}
        {slideOpen && (
          <SideBar
            filter={filter}
            setFilter={setFilter}
            cities={cities}
            setPage={setPage}
            countries={countries}
            states={states}
            continents={continents}
            handleCloseSlide={handleCloseSlide}
          />
        )}
        <div className="filter-action-container">
          <button
            onClick={() => setSlideOpen(true)}
            className="filter-action-btn"
          >
            <FaFilter color={"#fff"} />
          </button>
        </div>
      </main>

      {/*********PAGINATION*********/}
      <div className="paginate-container">
        {rows.meta.total_pages > 1 &&
          Array.from({ length: rows.meta?.total_pages }, (_, index) => {
            return (
              <Button
                style={{
                  backgroundColor: page === index + 1 ? "#84B59F" : "#F8F8F8",
                  color: page === index + 1 ? "#FFF" : "#000",
                }}
                onClick={() => handleChangePage(index + 1)}
                label={index + 1}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
