const express = require('express')
const app = express()

const PORT = 8000

const data = [
  {
    "code": 200,
    "status": "success",
    "message": "List Data",
    "result": {
      "itemsList": [
        {
          "registration_number": "20208428-9-200220",
          "status": "accepted",
          "distance1": 37.59,
          "distance2": 1760.795,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "selection_current": 1,
          "tmp_selection_current": 0,
          "first_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "second_option": {
            "type": "zonasi",
            "name": "SMAN 3 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "second_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 3 SUMEDANG",
            "npsn": "20208421",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8441000",
            "coordinate_lng": "107.9288000"
          },
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP NEGERI 1 SUMEDANG",
          "name": "VANI MUTIA SARI",
          "created_at": "2023-06-26T02:35:45.170Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "tmp_accepted_choice_current_position": 1,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "accepted_choice_current_position": 1
        },
        {
          "registration_number": "20278986-9-200045",
          "status": "accepted",
          "distance1": 72.474,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "selection_current": 1,
          "tmp_selection_current": 0,
          "first_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "mts",
          "school": "MTSS PERSIS,SUMEDANG SELATAN",
          "name": "ANGGARINI TANIA NURHANIA WAKARY",
          "created_at": "2023-06-26T04:43:46.720Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "tmp_accepted_choice_current_position": 2,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "accepted_choice_current_position": 2
        },
        {
          "registration_number": "20208433-9-200069",
          "status": "accepted",
          "distance1": 114.167,
          "distance2": 1776.813,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "selection_current": 1,
          "tmp_selection_current": 0,
          "first_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "second_option": {
            "type": "zonasi",
            "name": "SMAN 3 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "second_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 3 SUMEDANG",
            "npsn": "20208421",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8441000",
            "coordinate_lng": "107.9288000"
          },
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP AL MASOEM",
          "name": "ZAHRA PUTRI SEPTIANI",
          "created_at": "2023-06-26T01:48:43.916Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "tmp_accepted_choice_current_position": 3,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "accepted_choice_current_position": 3
        },
        {
          "registration_number": "20208448-9-200142",
          "status": "accepted",
          "distance1": 117.804,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "selection_current": 1,
          "tmp_selection_current": 0,
          "first_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP NEGERI 4 SUMEDANG",
          "name": "WAN MUHAMMAD FATHAN AR RASYID",
          "created_at": "2023-06-26T01:30:27.602Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "tmp_accepted_choice_current_position": 4,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "accepted_choice_current_position": 4
        },
        {
          "registration_number": "20208428-9-200365",
          "status": "accepted",
          "distance1": 125.727,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "selection_current": 1,
          "tmp_selection_current": 0,
          "first_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP NEGERI 1 SUMEDANG",
          "name": "MUHAMAD TEGAR PUTRA HARYADI",
          "created_at": "2023-06-27T08:58:03.212Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "tmp_accepted_choice_current_position": 5,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "accepted_choice_current_position": 5
        },
        {
          "registration_number": "20208428-9-200286",
          "status": "accepted",
          "distance1": 150.649,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "selection_current": 1,
          "tmp_selection_current": 0,
          "first_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP NEGERI 1 SUMEDANG",
          "name": "REVALINA RACHMA MAULIDA",
          "created_at": "2023-06-26T04:22:50.308Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "tmp_accepted_choice_current_position": 6,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "accepted_choice_current_position": 6
        },
        {
          "registration_number": "20208448-9-200194",
          "status": "accepted",
          "distance1": 158.309,
          "distance2": 1791.183,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "selection_current": 1,
          "tmp_selection_current": 0,
          "first_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "second_option": {
            "type": "zonasi",
            "name": "SMAN 3 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "second_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 3 SUMEDANG",
            "npsn": "20208421",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8441000",
            "coordinate_lng": "107.9288000"
          },
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP NEGERI 4 SUMEDANG",
          "name": "SYAFIAH NUR WULAN GANDARI",
          "created_at": "2023-06-26T03:06:50.835Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "tmp_accepted_choice_current_position": 7,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "accepted_choice_current_position": 7
        },
        {
          "registration_number": "20208448-9-200243",
          "status": "accepted",
          "distance1": 162.335,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "selection_current": 1,
          "tmp_selection_current": 0,
          "first_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP NEGERI 4 SUMEDANG",
          "name": "HADI NUGRAHA",
          "created_at": "2023-06-29T12:08:38.335Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "tmp_accepted_choice_current_position": 8,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "accepted_choice_current_position": 8
        },
        {
          "registration_number": "20278986-9-200070",
          "status": "accepted",
          "distance1": 167.083,
          "distance2": 2820.677,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "selection_current": 1,
          "tmp_selection_current": 0,
          "first_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "second_option": {
            "type": "zonasi",
            "name": "SMAN 2 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "second_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 2 SUMEDANG",
            "npsn": "20208420",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8485000",
            "coordinate_lng": "107.9466000"
          },
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "mts",
          "school": "MTSS PERSIS,SUMEDANG SELATAN",
          "name": "LUHUNG SATRIAJATI",
          "created_at": "2023-07-03T06:49:41.467Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "tmp_accepted_choice_current_position": 9,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "accepted_choice_current_position": 9
        },
        {
          "registration_number": "20208448-9-200202",
          "status": "accepted",
          "distance1": 168.336,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "selection_current": 1,
          "tmp_selection_current": 0,
          "first_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP NEGERI 4 SUMEDANG",
          "name": "VINA AGUSTINA",
          "created_at": "2023-06-26T03:49:42.510Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "tmp_accepted_choice_current_position": 10,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 SUMEDANG - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 SUMEDANG",
            "npsn": "20208419",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.8583000",
            "coordinate_lng": "107.9214000"
          },
          "accepted_choice_current_position": 10
        }
      ],
      "paginator": {
        "itemCount": 171,
        "perPage": 10,
        "pageCount": 18,
        "currentPage": 1,
        "slNo": 1,
        "hasPrevPage": false,
        "hasNextPage": true,
        "prev": null,
        "next": 2
      }
    }
  }
]

app.get('/', (req, res) => {
  const user = data
  res.statusCode = 200;
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify({ data: user }));
})

app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`))