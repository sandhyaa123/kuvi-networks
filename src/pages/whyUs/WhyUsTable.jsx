import { LabelHeading } from "../../components";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-green-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    className="w-5 h-5 mr-2 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const TableRow = ({ feature, kuviValue, traditionalValue, freelanceValue }) => (
  <tr className="hover:bg-gray-50 transition duration-200">
    <td className="px-6 py-5 text-sm font-medium text-gray-800 whitespace-nowrap">
      {feature}
    </td>
    <td className="px-6 py-5 text-sm text-indigo-600 font-semibold whitespace-nowrap">
      <div className="flex items-center">
        <CheckIcon />
        {kuviValue}
      </div>
    </td>
    <td className="px-6 py-5 text-sm text-gray-600 whitespace-nowrap">
      <div className="flex items-center">
        <CrossIcon />
        {traditionalValue}
      </div>
    </td>
    <td className="px-6 py-5 text-sm text-gray-600 whitespace-nowrap">
      <div className="flex items-center">
        <CrossIcon />
        {freelanceValue}
      </div>
    </td>
  </tr>
);

const WhyUsTable = () => {
  const tableData = [
    {
      feature: "Team control",
      kuviValue: "Full control over policies",
      traditionalValue: "Limited or no control",
      freelanceValue: "Control but requires direct management",

    },
    {
      feature: "Transparency",
      kuviValue: "Direct access to your team",
      traditionalValue: "Indirect access",
      freelanceValue: "Inconsistency in updates",

    },
    {
      feature: "Hidden costs",
      kuviValue: "No hidden fees",
      traditionalValue: "Potential hidden charges",
      freelanceValue: "Many hidden costs like Platform fees, revisions, extra time spent",

    },
    {
      feature: "Flexibility",
      kuviValue: "Easy team scaling",
      traditionalValue: "Rigid contracts",
      freelanceValue: "Difficulty in reaching out and hiring",

    },
    {
      feature: "Legal compliance",
      kuviValue: "Handled by us",
      traditionalValue: "Not always included",
      freelanceValue: "You bear all legal risks & compliance issues",

    },
  ];

  return (
    <div className="mb-24">
      <div className="mb-12">
        <LabelHeading styleCss="text-gray-800 text-center">
          How we deliver more value than traditional agencies
        </LabelHeading>
      </div>
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-5 bg-indigo-600 text-white text-left text-lg font-semibold">
                Features
              </th>
              <th className="px-6 py-5 bg-indigo-600 text-white text-left text-lg font-semibold">
                Kuvi Networks
              </th>
              <th className="px-6 py-5 bg-indigo-600 text-white text-left text-lg font-semibold">
              Outsourcing Agencies
              </th>
              <th className="px-6 py-5 bg-indigo-600 text-white text-left text-lg font-semibold">
                Freelancers / UpWork
                </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                feature={row?.feature}
                kuviValue={row?.kuviValue}
                traditionalValue={row?.traditionalValue}
                freelanceValue={row?.freelanceValue}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WhyUsTable;