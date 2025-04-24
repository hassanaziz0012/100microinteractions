import React from "react";


export default function Table({ rowClassName }: {
    rowClassName?: string;
}) {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Alice Johnson",
            position: "Software Engineer",
            department: "Engineering",
            email: "alice.johnson@example.com",
            phone: "555-1234",
            location: "New York",
            hireDate: { date: "2023-04-15", elapsed: "1 year ago" },
            status: "Interviewing",
            salary: "98,452.75",
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/29881401/pexels-photo-29881401/free-photo-of-intense-portrait-of-a-young-man-in-studio-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Bob Smith",
            position: "Product Manager",
            department: "Product",
            email: "bob.smith@example.com",
            phone: "555-5678",
            location: "San Francisco",
            hireDate: { date: "2024-01-10", elapsed: "3 months ago" },
            status: "Employed",
            salary: "112,308.50",
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2905820/pexels-photo-2905820.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Carol White",
            position: "UX Designer",
            department: "Design",
            email: "carol.white@example.com",
            phone: "555-8765",
            location: "Austin",
            hireDate: { date: "2022-12-01", elapsed: "1 year, 4 months ago" },
            status: "Employed",
            salary: "89,754.30",
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/28408585/pexels-photo-28408585/free-photo-of-close-up-portrait-of-a-man-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "David Lee",
            position: "Data Analyst",
            department: "Data",
            email: "david.lee@example.com",
            phone: "555-3344",
            location: "Chicago",
            hireDate: { date: "2023-09-05", elapsed: "7 months ago" },
            status: "Interviewing",
            salary: "77,920.45",
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/9534338/pexels-photo-9534338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Eva Brown",
            position: "HR Specialist",
            department: "Human Resources",
            email: "eva.brown@example.com",
            phone: "555-2233",
            location: "Boston",
            hireDate: { date: "2021-06-18", elapsed: "2 years, 10 months ago" },
            status: "Employed",
            salary: "68,115.90",
        },
        {
            id: 6,
            img: "https://images.pexels.com/photos/27897903/pexels-photo-27897903/free-photo-of-close-up-portrait-of-a-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Frank Garcia",
            position: "DevOps Engineer",
            department: "Engineering",
            email: "frank.garcia@example.com",
            phone: "555-9988",
            location: "Seattle",
            hireDate: { date: "2024-03-20", elapsed: "3 weeks ago" },
            status: "Employed",
            salary: "102,437.68",
        },
        {
            id: 7,
            img: "https://images.pexels.com/photos/590479/pexels-photo-590479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Grace Kim",
            position: "Marketing Lead",
            department: "Marketing",
            email: "grace.kim@example.com",
            phone: "555-4455",
            location: "Los Angeles",
            hireDate: { date: "2023-11-11", elapsed: "5 months ago" },
            status: "Employed",
            salary: "94,288.12",
        },
        {
            id: 8,
            img: "https://images.pexels.com/photos/2658834/pexels-photo-2658834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Henry Adams",
            position: "QA Tester",
            department: "Quality Assurance",
            email: "henry.adams@example.com",
            phone: "555-7788",
            location: "Denver",
            hireDate: { date: "2020-08-25", elapsed: "4 years, 8 months ago" },
            status: "Vacation",
            salary: "71,605.33",
        },
        {
            id: 9,
            img: "https://images.pexels.com/photos/3426975/pexels-photo-3426975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Isabel Turner",
            position: "Accountant",
            department: "Finance",
            email: "isabel.turner@example.com",
            phone: "555-8899",
            location: "Phoenix",
            hireDate: { date: "2024-04-01", elapsed: "1 week ago" },
            status: "Dismissed",
            salary: "83,429.79",
        },
        {
            id: 10,
            img: "https://images.pexels.com/photos/20094341/pexels-photo-20094341/free-photo-of-portrait-of-man-wearing-brown-cap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Jack Wilson",
            position: "Legal Advisor",
            department: "Legal",
            email: "jack.wilson@example.com",
            phone: "555-1122",
            location: "Miami",
            hireDate: { date: "2022-02-14", elapsed: "2 years, 2 months ago" },
            status: "Interviewing",
            salary: "107,312.60",
        },
    ];

    const renderStatus = (status: string) => (
        <div
            className={`
                font-semibold rounded-full px-4 py-1 text-center flex items-center gap-x-2
                ${
                    status === "Interviewing" &&
                    "bg-sky-200 border-sky-400 text-sky-800"
                }
                ${
                    status === "Employed" &&
                    "bg-emerald-200 border-emerald-400 text-emerald-800"
                }
                ${
                    status === "Vacation" &&
                    "bg-orange-200 border-orange-400 text-orange-800"
                }
                ${
                    status === "Dismissed" &&
                    "bg-rose-200 border-rose-400 text-rose-800"
                }
                `}
        >
            <span className="fill-current">
                {status === "Interviewing" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 -960 960 960"
                    >
                        <path d="m280-620 80-80-80-80-80 80zM160-400q-33 0-56.5-23.5T80-480v-360q0-33 23.5-56.5T160-920h640q33 0 56.5 23.5T880-840v360q0 33-23.5 56.5T800-400H671q6-20 8-40t0-40h121v-360H160v360h121q-2 20 0 40t8 40zm500-280q25 0 42.5-17.5T720-740t-17.5-42.5T660-800t-42.5 17.5T600-740t17.5 42.5T660-680M200-40v-84q0-35 19.5-65t51.5-45q49-23 102-34.5T480-280t107 11.5T689-234q32 15 51.5 45t19.5 65v84zm80-80h400v-4q0-12-7-22t-18-15q-42-19-86-29t-89-10-89 10-86 29q-11 5-18 15t-7 22zm200-200q-58 0-99-41t-41-99 41-99 99-41 99 41 41 99-41 99-99 41m0-80q25 0 42.5-17.5T540-460t-17.5-42.5T480-520t-42.5 17.5T420-460t17.5 42.5T480-400m0 280" />
                    </svg>
                )}
                {status === "Employed" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-person-workspace"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
                    </svg>
                )}
                {status === "Vacation" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 -960 960 960"
                    >
                        <path d="M280-80v-40q-33 0-56.5-23.5T200-200v-440q0-33 23.5-56.5T280-720h80v-120q0-17 11.5-28.5T400-880h160q17 0 28.5 11.5T600-840v120h80q33 0 56.5 23.5T760-640v440q0 33-23.5 56.5T680-120v40h-80v-40H360v40zm160-640h80v-80h-80zm40 240q53 0 103.5-13.5T680-534v-106H280v106q46 27 96.5 40.5T480-480m-40 120v-42q-42-5-82-15t-78-27v244h400v-244q-38 17-78 27t-82 15v42zm40-84" />
                    </svg>
                )}
                {status === "Dismissed" && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 -960 960 960"
                    >
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224z" />
                    </svg>
                )}
            </span>
            {status}
        </div>
    );

    const renderHireDate = (hireDate: { date: string; elapsed: string }) => (
        <>
            <div>{new Date(hireDate.date).toDateString()}</div>
            <div className="text-sm font-semibold text-slate-500">
                {hireDate.elapsed}
            </div>
        </>
    );

    return (
        <>
            <h1 className="text-2xl m-6">Employees Table</h1>
            <div className="overflow-x-scroll m-6 relative">
                <table className="table-auto border-collapse border border-red-300 text-slate-600">
                    <thead>
                        <tr className="text-sm uppercase tracking-wider">
                            <th className="border border-slate-300 px-8 py-4">
                                ID
                            </th>
                            <th className="border border-slate-300 px-8 py-4">
                                Name
                            </th>
                            <th className="border border-slate-300 px-8 py-4">
                                Position
                            </th>
                            <th className="border border-slate-300 px-8 py-4">
                                Department
                            </th>
                            <th className="border border-slate-300 px-8 py-4">
                                Email
                            </th>
                            <th className="border border-slate-300 px-8 py-4">
                                Phone
                            </th>
                            <th className="border border-slate-300 px-8 py-4">
                                Location
                            </th>
                            <th className="border border-slate-300 px-8 py-4">
                                Hire Date
                            </th>
                            <th className="border border-slate-300 px-8 py-4">
                                Status
                            </th>
                            <th className="border border-slate-300 px-8 py-4">
                                Salary
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((employee) => (
                            <tr
                                key={employee.id}
                                className={rowClassName}
                            >
                                <td className="border border-slate-300 px-8 py-4">
                                    {employee.id}
                                </td>
                                <td className="border border-slate-300 px-8 py-4 min-w-60">
                                    <div className="flex items-center gap-x-4">
                                        <img
                                            src={employee.img}
                                            alt=""
                                            className="rounded-full max-w-10 object-cover object-center"
                                        />
                                        {employee.name}
                                    </div>
                                </td>
                                <td className="border border-slate-300 px-8 py-4">
                                    {employee.position}
                                </td>
                                <td className="border border-slate-300 px-8 py-4">
                                    {employee.department}
                                </td>
                                <td className="border border-slate-300 px-8 py-4">
                                    {employee.email}
                                </td>
                                <td className="border border-slate-300 px-8 py-4 text-right">
                                    {employee.phone}
                                </td>
                                <td className="border border-slate-300 px-8 py-4">
                                    {employee.location}
                                </td>
                                <td className="border border-slate-300 px-8 py-4 min-w-52">
                                    {renderHireDate(employee.hireDate)}
                                </td>
                                <td className="border border-slate-300 px-8 py-4">
                                    {renderStatus(employee.status)}
                                </td>
                                <td className="border border-slate-300 px-8 py-4 text-right">
                                    {employee.salary}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex-col gap-y-12 m-10 hidden">
                {data.map((employee, i) => (
                    <div key={i} className="shadow-xl rounded-xl group">
                        <div className="p-5 bg-gradient-to-b from-slate-700 to-slate-600 text-slate-100 rounded-xl group-first:rounded-b-none relative">
                            <div className="flex items-center justify-between gap-x-4">
                                <div className="flex items-center gap-x-4">
                                    <img
                                        src={employee.img}
                                        alt=""
                                        className="max-w-10 rounded-full object-center object-cover shadow"
                                    />
                                    <p className="font-semibold">
                                        {employee.name}
                                    </p>
                                </div>
                                {renderStatus(employee.status)}
                            </div>
                            <div className="absolute w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center right-0">
                                <span className={`${i !== 0 && "hidden"}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </span>
                                <span className={`${i <= 0 && "hidden"}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="p-5 bg-slate-200 text-slate-600 rounded-b-xl hidden flex-col group-first:flex">
                            <div className="flex gap-x-4 justify-between items-center mb-12">
                                <div className="flex gap-x-2 items-center fill-current">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 -960 960 960"
                                    >
                                        <path d="M560-440h200v-80H560zm0-120h200v-80H560zM200-320h320v-22q0-45-44-71.5T360-440t-116 26.5-44 71.5zm160-160q33 0 56.5-23.5T440-560t-23.5-56.5T360-640t-56.5 23.5T280-560t23.5 56.5T360-480M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160zm0-80h640v-480H160zm0 0v-480z" />
                                    </svg>
                                    <div>
                                        <div>{employee.position}</div>
                                        <div className="text-sm font-semibold">
                                            {employee.department}
                                        </div>
                                    </div>
                                </div>
                                <div className="font-semibold flex text-lg fill-current">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 -960 960 960"
                                    >
                                        <path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84z" />
                                    </svg>
                                    {employee.salary}
                                </div>
                            </div>
                            <div className="border-b border-b-slate-300/60 pb-6 flex flex-col gap-y-2">
                                <div className="flex items-center justify-between gap-x-2">
                                    <span className="text-slate-600 font-semibold text-sm flex gap-x-2 items-center fill-current">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 -960 960 960"
                                        >
                                            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160zm320-280L160-640v400h640v-400zm0-80 320-200H160zM160-640v-80 480z" />
                                        </svg>
                                    </span>
                                    <span>{employee.email}</span>
                                </div>
                                <div className="flex items-center justify-between gap-x-2">
                                    <span className="text-slate-600 font-semibold text-sm flex gap-x-2 items-center fill-current">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 -960 960 960"
                                        >
                                            <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40zm0-200v120h400v-120zm200 100q17 0 28.5-11.5T520-180t-11.5-28.5T480-220t-28.5 11.5T440-180t11.5 28.5T480-140M280-320h400v-400H280zm0-480h400v-40H280zm0 560v120zm0-560v-40z" />
                                        </svg>
                                    </span>
                                    <span className="">{employee.phone}</span>
                                </div>
                            </div>
                            {/* <div className="flex items-center justify-between py-3 gap-x-2 border-b border-b-slate-300">
                                <span className="text-slate-600 font-semibold text-sm flex gap-x-2 items-center fill-current">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 -960 960 960"
                                    >
                                        <path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84z" />
                                    </svg>
                                </span>
                                <span className="">${employee.salary}</span>
                            </div>
                            <div className="flex items-center justify-between py-3 gap-x-2 border-b border-b-slate-300">
                                <span className="text-slate-600 font-semibold text-sm flex gap-x-2 items-center fill-current">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 -960 960 960"
                                    >
                                        <path d="M560-440h200v-80H560zm0-120h200v-80H560zM200-320h320v-22q0-45-44-71.5T360-440t-116 26.5-44 71.5zm160-160q33 0 56.5-23.5T440-560t-23.5-56.5T360-640t-56.5 23.5T280-560t23.5 56.5T360-480M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160zm0-80h640v-480H160zm0 0v-480z" />
                                    </svg>
                                </span>
                                <span className="">{employee.position}</span>
                            </div> */}
                            {/* <div className="flex items-center justify-between py-3 gap-x-2 border-b border-b-slate-300">
                                <span className="text-slate-600 font-semibold text-sm flex gap-x-2 items-center fill-current">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 -960 960 960"
                                    >
                                        <path d="M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600zm160-640v560zm160 320q17 0 28.5-11.5T480-480t-11.5-28.5T440-520t-28.5 11.5T400-480t11.5 28.5T440-440M280-200h240v-560H280z" />
                                    </svg>
                                </span>
                                <span className="">{employee.department}</span>
                            </div> */}
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col items-start justify-between py-3 gap-x-2 ">
                                    <span className="text-slate-600 font-semibold text-sm flex flex-col items-start gap-y-2 fill-current">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 -960 960 960"
                                        >
                                            <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80zm0-80h560v-400H200zm0-480h560v-80H200zm0 0v-80zm280 240q-17 0-28.5-11.5T440-440t11.5-28.5T480-480t28.5 11.5T520-440t-11.5 28.5T480-400m-160 0q-17 0-28.5-11.5T280-440t11.5-28.5T320-480t28.5 11.5T360-440t-11.5 28.5T320-400m320 0q-17 0-28.5-11.5T600-440t11.5-28.5T640-480t28.5 11.5T680-440t-11.5 28.5T640-400M480-240q-17 0-28.5-11.5T440-280t11.5-28.5T480-320t28.5 11.5T520-280t-11.5 28.5T480-240m-160 0q-17 0-28.5-11.5T280-280t11.5-28.5T320-320t28.5 11.5T360-280t-11.5 28.5T320-240m320 0q-17 0-28.5-11.5T600-280t11.5-28.5T640-320t28.5 11.5T680-280t-11.5 28.5T640-240" />
                                        </svg>
                                        <span className="">
                                            {renderHireDate(employee.hireDate)}
                                        </span>
                                    </span>
                                </div>
                                <div className="flex items-center justify-between py-3 gap-x-2">
                                    <span className="text-slate-600 font-semibold text-sm flex flex-col gap-y-2 items-start fill-current">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 -960 960 960"
                                        >
                                            <path d="M480-360q56 0 101-27.5t71-72.5q-35-29-79-44.5T480-520t-93 15.5-79 44.5q26 45 71 72.5T480-360m0-200q33 0 56.5-23.5T560-640t-23.5-56.5T480-720t-56.5 23.5T400-640t23.5 56.5T480-560m0 374q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480" />
                                        </svg>
                                        <span className="">
                                            {employee.location}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
