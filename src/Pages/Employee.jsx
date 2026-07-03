import React, { useMemo, useState } from 'react';
import { employeesData } from '../data/dummy';
import { Header } from '../Components';

const Employee = () => {
  const [search, setSearch] = useState('');

  const filteredEmployees = useMemo(() => {
    return employeesData.filter((item) => {
      const keyword = search.toLowerCase();

      return (
        item.Name.toLowerCase().includes(keyword) ||
        item.Title.toLowerCase().includes(keyword) ||
        item.Country.toLowerCase().includes(keyword) ||
        item.EmployeeID.toString().includes(keyword)
      );
    });
  }, [search]);

  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-xl shadow">

      <Header category="Page" title="Employees" />

      {/* Search */}
      <div className="mt-6 mb-5">
        <input
          type="text"
          placeholder="Search Employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-main-dark-bg dark:border-gray-600"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">

        <table className="min-w-275 w-full">

          <thead className="bg-gray-100 dark:bg-main-dark-bg sticky top-0">

            <tr>
              <th className="px-5 py-4 text-left">Photo</th>
              <th className="px-5 py-4 text-left">Employee ID</th>
              <th className="px-5 py-4 text-left">Name</th>
              <th className="px-5 py-4 text-left">Designation</th>
              <th className="px-5 py-4 text-left">Country</th>
              <th className="px-5 py-4 text-left">Hire Date</th>
              <th className="px-5 py-4 text-left">Reports To</th>
            </tr>

          </thead>

          <tbody>

            {filteredEmployees.map((item, index) => (

              <tr
                key={index}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-main-dark-bg transition"
              >

                {/* Employee Image */}
                <td className="px-5 py-4">
                  <img
                    src={item.EmployeeImage}
                    alt={item.Name}
                    className="w-14 h-14 rounded-full object-cover border"
                  />
                </td>

                {/* Employee ID */}
                <td className="px-5 py-4 font-semibold">
                  #{item.EmployeeID}
                </td>

                {/* Name */}
                <td className="px-5 py-4">
                  {item.Name}
                </td>

                {/* Designation */}
                <td className="px-5 py-4">
                  {item.Title}
                </td>

                {/* Country */}
                <td className="px-5 py-4">
                  {item.Country}
                </td>

                {/* Hire Date */}
                <td className="px-5 py-4">
                  {item.HireDate}
                </td>

                {/* Reports To */}
                <td className="px-5 py-4">
                  {item.ReportsTo}
                </td>

              </tr>

            ))}

            {filteredEmployees.length === 0 && (

              <tr>

                <td
                  colSpan={7}
                  className="text-center py-10 text-gray-500"
                >
                  No Employees Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* Footer */}
      <div className="mt-5 text-sm text-gray-500">
        Showing {filteredEmployees.length} Employees
      </div>

    </div>
  );
};

export default Employee;