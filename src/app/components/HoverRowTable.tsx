import React from "react";
import Table from "./placeholders/Table";

export default function HoverRowTable() {
    return (
        <div>
            <Table rowClassName="nth-[odd]:not-[&:hover]:bg-slate-100 hover:bg-slate-200"></Table>
        </div>
    );
}
