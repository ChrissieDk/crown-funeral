import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const PricingComponent = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section: any) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderTable = (plan: string) => {
    const tableContent = () => {
      switch (plan) {
        case "Family Plan":
          return (
            <table className="w-full border-collapse text-white text-sm">
              <thead>
                <tr className="bg-[#CFB46D] text-black">
                  <th colSpan={13} className="p-2 text-center font-bold">
                    Family Plan
                  </th>
                </tr>
                <tr className="bg-gray-700">
                  <th
                    rowSpan={2}
                    className="p-2 text-left border border-gray-600"
                  >
                    Policyholder Age at Commencement
                  </th>
                  <th
                    rowSpan={2}
                    className="p-2 text-left border border-gray-600"
                  >
                    Plan
                  </th>
                  <th
                    rowSpan={2}
                    className="p-2 text-left border border-gray-600"
                  >
                    Life Assured
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 1
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 2
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 3
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 4
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 5
                  </th>
                </tr>
                <tr className="bg-gray-700">
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    rowSpan={11}
                    className="p-2 border text-center border-gray-600"
                  >
                    18-64
                  </td>
                  <td rowSpan={2} className="p-2 border border-gray-600">
                    Member Only
                  </td>
                  <td className="p-2 border border-gray-600">Policyholder</td>
                  <td className="p-2 text-center border border-gray-600">
                    10 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">95</td>
                  <td className="p-2 text-center border border-gray-600">
                    15 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    110
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    20 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    125
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    25 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    140
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    30 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    155
                  </td>
                </tr>
                <tr>
                  <td colSpan={11} className="p-2 border border-gray-600"></td>
                </tr>
                <tr>
                  <td rowSpan={3} className="p-2 border border-gray-600">
                    Single Parent
                  </td>
                  <td className="p-2 border border-gray-600">Policyholder</td>
                  <td className="p-2 text-center border border-gray-600">
                    10 000
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    110
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    15 000
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    125
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    20 000
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    150
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    25 000
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    185
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    30 000
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    210
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">
                    Child: 14-21/26
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    7 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    12 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    15 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    18 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    20 000
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Child: 0-13</td>
                  <td className="p-2 text-center border border-gray-600">
                    5 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    7 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    10 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    12 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    15 000
                  </td>
                </tr>
                <tr>
                  <td rowSpan={5} className="p-2 border border-gray-600">
                    Family
                  </td>
                  <td className="p-2 border border-gray-600">Policyholder</td>
                  <td className="p-2 text-center border border-gray-600">
                    10 000
                  </td>
                  <td
                    rowSpan={5}
                    className="p-2 text-center border border-gray-600"
                  >
                    170
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    15 000
                  </td>
                  <td
                    rowSpan={5}
                    className="p-2 text-center border border-gray-600"
                  >
                    185
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    20 000
                  </td>
                  <td
                    rowSpan={5}
                    className="p-2 text-center border border-gray-600"
                  >
                    200
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    25 000
                  </td>
                  <td
                    rowSpan={5}
                    className="p-2 text-center border border-gray-600"
                  >
                    219
                  </td>
                  {/* <td className="p-2 text-center border border-gray-600">
                    30 000
                  </td>
                  <td
                    rowSpan={5}
                    className="p-2 text-center border border-gray-600"
                  >
                    240
                  </td> */}
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Spouse</td>
                  <td className="p-2 text-center border border-gray-600">
                    7 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    12 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    15 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    18 000
                  </td>
                  {/* <td className="p-2 text-center border border-gray-600">
                    20 000
                  </td> */}
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">
                    Child: 14-21/26
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    7 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    12 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    15 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    18 000
                  </td>
                  {/* <td className="p-2 text-center border border-gray-600">
                    20 000
                  </td> */}
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Child: 0-13</td>
                  <td className="p-2 text-center border border-gray-600">
                    5 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    7 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    10 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    12 500
                  </td>
                  {/* <td className="p-2 text-center border border-gray-600">
                    15 000
                  </td> */}
                </tr>
              </tbody>
            </table>
          );
        case "Pensioner Plan":
          return (
            <table className="w-full border-collapse text-white text-sm">
              <thead>
                <tr className="bg-[#CFB46D] text-black">
                  <th colSpan={11} className="p-2 text-center font-bold">
                    Pensioner Plan
                  </th>
                </tr>
                <tr className="bg-gray-700">
                  <th
                    rowSpan={2}
                    className="p-2 text-left border border-gray-600"
                  >
                    Policyholder Age at Commencement
                  </th>
                  <th
                    rowSpan={2}
                    className="p-2 text-left border border-gray-600"
                  >
                    Plan
                  </th>
                  <th
                    rowSpan={2}
                    className="p-2 text-left border border-gray-600"
                  >
                    Life Assured
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 1
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 2
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 3
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 4
                  </th>
                </tr>
                <tr className="bg-gray-700">
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    rowSpan={2}
                    className="p-2 border text-center border-gray-600"
                  >
                    65-69
                  </td>
                  <td rowSpan={2} className="p-2 border border-gray-600">
                    Member Only
                  </td>
                  <td className="p-2 border border-gray-600">Policyholder</td>
                  <td className="p-2 text-center border border-gray-600">
                    7 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    145
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    9 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    155
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    11 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    175
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    13 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    190
                  </td>
                </tr>
                <tr>
                  <td colSpan={9} className="p-2 border border-gray-600"></td>
                </tr>
                <tr>
                  <td
                    rowSpan={2}
                    className="p-2 border text-center border-gray-600"
                  >
                    70-79
                  </td>
                  <td rowSpan={2} className="p-2 border border-gray-600">
                    Member Only
                  </td>
                  <td className="p-2 border border-gray-600">Policyholder</td>
                  <td className="p-2 text-center border border-gray-600">
                    5 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    145
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    6 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    155
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    8 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    175
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    9 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    190
                  </td>
                </tr>
                <tr>
                  <td colSpan={9} className="p-2 border border-gray-600"></td>
                </tr>
                <tr>
                  <td
                    rowSpan={3}
                    className="p-2 border text-center border-gray-600"
                  >
                    65-69
                  </td>
                  <td rowSpan={3} className="p-2 border border-gray-600">
                    Single Parent
                  </td>
                  <td className="p-2 border border-gray-600">Policyholder</td>
                  <td className="p-2 text-center border border-gray-600">
                    7 000
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    160
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    9 000
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    170
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    11 000
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    190
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    13 500
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    205
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">
                    Child: 14-21/26
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    5 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    6 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    8 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    9 500
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Child: 0-13</td>
                  <td className="p-2 text-center border border-gray-600">
                    3 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    4 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    5 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    6 750
                  </td>
                </tr>
                <tr>
                  <td
                    rowSpan={3}
                    className="p-2 border text-center border-gray-600"
                  >
                    70-79
                  </td>
                  <td rowSpan={3} className="p-2 border border-gray-600">
                    Single Parent
                  </td>
                  <td className="p-2 border border-gray-600">Policyholder</td>
                  <td className="p-2 text-center border border-gray-600">
                    5 000
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    160
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    6 500
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    170
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    8 000
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    190
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    9 500
                  </td>
                  <td
                    rowSpan={3}
                    className="p-2 text-center border border-gray-600"
                  >
                    205
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">
                    Child: 14-21/26
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    3 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    4 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    5 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    6 750
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Child: 0-13</td>
                  <td className="p-2 text-center border border-gray-600">
                    2 500
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    3 250
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    4 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    4 750
                  </td>
                </tr>
              </tbody>
            </table>
          );
        case "Extended Family: Add-on":
          return (
            <table className="w-full border-collapse text-white text-sm">
              <thead>
                <tr className="bg-[#CFB46D] text-black">
                  <th colSpan={11} className="p-2 text-center font-bold">
                    Extended Family: Add-on
                  </th>
                </tr>
                <tr className="bg-gray-700">
                  <th
                    rowSpan={2}
                    className="p-2 text-left border border-gray-600"
                  >
                    Extended Family Member Age at Commencement
                  </th>
                  <th
                    rowSpan={2}
                    className="p-2 text-left border border-gray-600"
                  >
                    Plan
                  </th>
                  <th
                    rowSpan={2}
                    className="p-2 text-left border border-gray-600"
                  >
                    Life Assured
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 1
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 2
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 3
                  </th>
                  <th
                    colSpan={2}
                    className="p-2 text-center border border-gray-600"
                  >
                    Option 4
                  </th>
                </tr>
                <tr className="bg-gray-700">
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Cover (R)
                  </th>
                  <th className="p-2 text-center border border-gray-600">
                    Premium (R)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border text-center border-gray-600">
                    0-64
                  </td>
                  <td className="p-2 border border-gray-600">Add-on</td>
                  <td className="p-2 border border-gray-600">Extended</td>
                  <td className="p-2 text-center border border-gray-600">
                    2 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">20</td>
                  <td className="p-2 text-center border border-gray-600">
                    3 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">30</td>
                  <td className="p-2 text-center border border-gray-600">
                    4 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">40</td>
                  <td className="p-2 text-center border border-gray-600">
                    5 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">50</td>
                </tr>
                <tr>
                  <td className="p-2 border text-center border-gray-600">
                    65-74
                  </td>
                  <td className="p-2 border border-gray-600">Add-on</td>
                  <td className="p-2 border border-gray-600">Extended</td>
                  <td className="p-2 text-center border border-gray-600">
                    2 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">40</td>
                  <td className="p-2 text-center border border-gray-600">
                    3 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">60</td>
                  <td className="p-2 text-center border border-gray-600">
                    4 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">80</td>
                  <td className="p-2 text-center border border-gray-600">
                    5 000
                  </td>
                  <td className="p-2 text-center border border-gray-600">
                    100
                  </td>
                </tr>
              </tbody>
            </table>
          );
        default:
          return null;
      }
    };

    return (
      <div className="overflow-x-auto">
        <div className="min-w-max">{tableContent()}</div>
      </div>
    );
  };

  return (
    <div className="bg-[#1A1A1A] text-white p-8 font-sans">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[#CFB46D]">
        Pricing
      </h1>
      <p className="mb-4 text-md lg:text-lg">
        Funerals can be a significant financial burden on your family. With our
        Funeral Cover, you can have peace of mind knowing that you're prepared
        for this expense.
      </p>
      <p className="mb-4 text-md lg:text-lg">
        Our plans are flexible, with prices based on your age, needs, and chosen
        cover amount.
      </p>
      <p className="mb-4 text-md lg:text-lg">
        Please refer to the rates table below to find the best plan for you.
      </p>
      <p className="mb-8 text-md lg:text-lg">
        If you'd prefer to speak with a consultant, simply request a call back
        or contact our call centre at 0861 18 92 02.
      </p>
      <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#CFB46D]">
        Rates Table
      </h2>
      <div className="space-y-2">
        {["Family Plan", "Pensioner Plan", "Extended Family: Add-on"].map(
          (plan) => (
            <div key={plan} className="border border-[#CFB46D] rounded">
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => toggleSection(plan)}
              >
                <span className="text-[#CFB46D] text-lg lg:text-xl">
                  {plan}
                </span>
                {expandedSection === plan ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {expandedSection === plan && (
                <div className="p-4 border-t border-[#cfb46D]">
                  {renderTable(plan)}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PricingComponent;
