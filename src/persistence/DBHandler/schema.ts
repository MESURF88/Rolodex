export default function Columns(idx) {

    const column = [
        "person_id",
        "first_name",
        "last_name",
        "communication_pref",
        "latitude",
        "longitude",
        "age",
        "first_known",
        "interest_category",
        "interest",
        "been_awhile",
        "notes"
    ];

    if (idx < column.length) {

        return column[idx];
    }
    else {
        return "Error";
    }

}