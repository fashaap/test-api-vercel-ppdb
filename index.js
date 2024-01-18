const express = require('express')
const app = express()

const PORT = 8000

const dataSumedang = [
  {
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

const dataCicalengka = [
  {
    "result": {
      "itemsList": [
        {
          "registration_number": "20206109-6-100181",
          "status": "accepted",
          "distance1": 0,
          "distance2": 0,
          "distance3": 0,
          "score": 484.72727272727275,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "prestasi-rapor",
            "name": "SMAN 1 CICALENGKA - PRESTASI RAPOR",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 RANCAEKEK",
          "name": "ABIGAIL CAROLINA TAMPUBOLON",
          "created_at": "2023-06-08T07:07:05.181Z",
          "accepted_option": {
            "type": "prestasi-rapor",
            "name": "SMAN 1 CICALENGKA - PRESTASI RAPOR"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 1,
          "selection_current": 1
        },
        {
          "registration_number": "20206202-5-100023",
          "status": "accepted",
          "distance1": 0,
          "distance2": 0,
          "distance3": 0,
          "score": 425,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 425,
          "score_ujikom": 425,
          "first_option": {
            "type": "prestasi",
            "name": "SMAN 1 CICALENGKA - PRESTASI KEJUARAAN",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP FK. BINA MUDA",
          "name": "NESHA KURNIA SARI",
          "created_at": "2023-06-07T01:04:42.943Z",
          "accepted_option": {
            "type": "prestasi",
            "name": "SMAN 1 CICALENGKA - PRESTASI KEJUARAAN"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 1,
          "selection_current": 1
        },
        {
          "registration_number": "20227686-9-200051",
          "status": "accepted",
          "distance1": 25.687,
          "distance2": 6621.38,
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
            "name": "SMAN 1 CICALENGKA - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_option": {
            "type": "zonasi",
            "name": "SMAN 1 NAGREG - ZONASI",
            "no_color_blind": false
          },
          "second_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 NAGREG",
            "npsn": "20227900",
            "address_city": "BANDUNG",
            "coordinate_lat": "-7.0186000",
            "coordinate_lng": "107.8904000"
          },
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP MA ARIF CICALENGKA",
          "name": "NAZHWA  AZZAHRA",
          "created_at": "2023-06-26T03:35:34.743Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 CICALENGKA - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "tmp_accepted_choice_current_position": 1,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 CICALENGKA - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 1
        },
        {
          "registration_number": "20206073-3-100013",
          "status": "accepted",
          "distance1": 122.678,
          "distance2": 6658.413,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "kondisi-tertentu",
            "name": "SMAN 1 CICALENGKA - KONDISI TERTENTU",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_option": {
            "type": "kondisi-tertentu",
            "name": "SMAN 1 NAGREG - KONDISI TERTENTU",
            "no_color_blind": false
          },
          "second_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 NAGREG",
            "npsn": "20227900",
            "address_city": "BANDUNG",
            "coordinate_lat": "-7.0186000",
            "coordinate_lng": "107.8904000"
          },
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 CICALENGKA",
          "name": "RHAISYA TRI RHAMADANI",
          "created_at": "2023-06-07T02:31:05.146Z",
          "accepted_option": {
            "type": "kondisi-tertentu",
            "name": "SMAN 1 CICALENGKA - KONDISI TERTENTU"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 1,
          "selection_current": 1
        },
        {
          "registration_number": "20206202-2-100035",
          "status": "accepted",
          "distance1": 96.724,
          "distance2": 6572.204,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "ketm",
            "name": "SMAN 1 CICALENGKA - KETM",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_option": {
            "type": "ketm",
            "name": "SMAN 1 NAGREG - KETM",
            "no_color_blind": false
          },
          "second_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 NAGREG",
            "npsn": "20227900",
            "address_city": "BANDUNG",
            "coordinate_lat": "-7.0186000",
            "coordinate_lng": "107.8904000"
          },
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP FK. BINA MUDA",
          "name": "NIZAR AKBAR MUDZAKIR",
          "created_at": "2023-06-06T02:51:50.882Z",
          "accepted_option": {
            "type": "ketm",
            "name": "SMAN 1 CICALENGKA - KETM"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 1,
          "selection_current": 1
        },
        {
          "registration_number": "69972422-4-100006",
          "status": "accepted",
          "distance1": 25.284,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "perpindahan",
            "name": "SMAN 1 CICALENGKA - PERPINDAHAN TUGAS ORTU / ANAK GURU",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP IT MATAHATI",
          "name": "RAKHA PUTRA NUGRAHA",
          "created_at": "2023-06-07T03:41:13.651Z",
          "accepted_option": {
            "type": "perpindahan",
            "name": "SMAN 1 CICALENGKA - PERPINDAHAN TUGAS ORTU / ANAK GURU"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "priority": 1,
          "accepted_choice_current_position": 1,
          "selection_current": 1
        },
        {
          "registration_number": "20206109-6-100182",
          "status": "accepted",
          "distance1": 0,
          "distance2": 0,
          "distance3": 0,
          "score": 484.09090909090907,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "prestasi-rapor",
            "name": "SMAN 1 CICALENGKA - PRESTASI RAPOR",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 RANCAEKEK",
          "name": "JHONATHAN ZUNNIEL",
          "created_at": "2023-06-08T07:19:35.244Z",
          "accepted_option": {
            "type": "prestasi-rapor",
            "name": "SMAN 1 CICALENGKA - PRESTASI RAPOR"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 2,
          "selection_current": 1
        },
        {
          "registration_number": "20235588-4-100013",
          "status": "accepted",
          "distance1": 25.359,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "perpindahan",
            "name": "SMAN 1 CICALENGKA - PERPINDAHAN TUGAS ORTU / ANAK GURU",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP NEGERI 1 CIMANGGUNG",
          "name": "AJIE MAULANA AKBAR",
          "created_at": "2023-06-07T03:16:36.930Z",
          "accepted_option": {
            "type": "perpindahan",
            "name": "SMAN 1 CICALENGKA - PERPINDAHAN TUGAS ORTU / ANAK GURU"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "priority": 1,
          "accepted_choice_current_position": 2,
          "selection_current": 1
        },
        {
          "registration_number": "20206073-5-100062",
          "status": "accepted",
          "distance1": 5280.208,
          "distance2": 3593.967,
          "distance3": 99999,
          "score": 365,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 365,
          "score_ujikom": 365,
          "first_option": {
            "type": "prestasi",
            "name": "SMAN 1 CICALENGKA - PRESTASI KEJUARAAN",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_option": null,
          "second_school": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 CICALENGKA",
          "name": "DARA JUNIA RAHMA",
          "created_at": "2023-06-06T01:45:05.723Z",
          "accepted_option": {
            "type": "prestasi",
            "name": "SMAN 1 CICALENGKA - PRESTASI KEJUARAAN"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 2,
          "selection_current": 1
        },
        {
          "registration_number": "20206073-9-200471",
          "status": "accepted",
          "distance1": 34.207,
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
            "name": "SMAN 1 CICALENGKA - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 CICALENGKA",
          "name": "MUHAMMAD BAGUS RAHMAN",
          "created_at": "2023-07-04T05:55:42.777Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 CICALENGKA - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "tmp_accepted_choice_current_position": 2,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 CICALENGKA - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 2
        },
        {
          "registration_number": "20206202-2-100030",
          "status": "accepted",
          "distance1": 168.349,
          "distance2": 6538.321,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "ketm",
            "name": "SMAN 1 CICALENGKA - KETM",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_option": {
            "type": "ketm",
            "name": "SMAN 1 NAGREG - KETM",
            "no_color_blind": false
          },
          "second_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 NAGREG",
            "npsn": "20227900",
            "address_city": "BANDUNG",
            "coordinate_lat": "-7.0186000",
            "coordinate_lng": "107.8904000"
          },
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP FK. BINA MUDA",
          "name": "SYAKIRA NURFAUZIYAH",
          "created_at": "2023-06-06T01:48:28.996Z",
          "accepted_option": {
            "type": "ketm",
            "name": "SMAN 1 CICALENGKA - KETM"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 2,
          "selection_current": 1
        },
        {
          "registration_number": "20206073-3-100017",
          "status": "accepted",
          "distance1": 339.469,
          "distance2": 99999,
          "distance3": 99999,
          "score": 410.54545454545456,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "kondisi-tertentu",
            "name": "SMAN 1 CICALENGKA - KONDISI TERTENTU",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_option": null,
          "second_school": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 CICALENGKA",
          "name": "AISYAH NUR AMINI",
          "created_at": "2023-06-07T06:10:03.872Z",
          "accepted_option": {
            "type": "kondisi-tertentu",
            "name": "SMAN 1 CICALENGKA - KONDISI TERTENTU"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 2,
          "selection_current": 1
        },
        {
          "registration_number": "20206073-3-100010",
          "status": "accepted",
          "distance1": 352.578,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "kondisi-tertentu",
            "name": "SMAN 1 CICALENGKA - KONDISI TERTENTU",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 CICALENGKA",
          "name": "MUHAMMAD EVAN FAUZI",
          "created_at": "2023-06-06T03:58:51.026Z",
          "accepted_option": {
            "type": "kondisi-tertentu",
            "name": "SMAN 1 CICALENGKA - KONDISI TERTENTU"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 3,
          "selection_current": 1
        },
        {
          "registration_number": "20206109-6-100183",
          "status": "accepted",
          "distance1": 0,
          "distance2": 0,
          "distance3": 0,
          "score": 482.5454545454545,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "prestasi-rapor",
            "name": "SMAN 1 CICALENGKA - PRESTASI RAPOR",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_option": {
            "type": "prestasi-rapor",
            "name": "SMAN 1 RANCAEKEK - PRESTASI RAPOR",
            "no_color_blind": false
          },
          "second_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 RANCAEKEK",
            "npsn": "20254054",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9600000",
            "coordinate_lng": "107.7657000"
          },
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 RANCAEKEK",
          "name": "EKA FEBRYANTI",
          "created_at": "2023-06-08T07:50:28.823Z",
          "accepted_option": {
            "type": "prestasi-rapor",
            "name": "SMAN 1 CICALENGKA - PRESTASI RAPOR"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 3,
          "selection_current": 1
        },
        {
          "registration_number": "20206073-9-200359",
          "status": "accepted",
          "distance1": 40.411,
          "distance2": 3717.229,
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
            "name": "SMAN 1 CICALENGKA - ZONASI",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN CIMANGGUNG",
            "npsn": "20235621",
            "address_city": "SUMEDANG",
            "coordinate_lat": "-6.9572000",
            "coordinate_lng": "107.8211000"
          },
          "second_option": {
            "type": "zonasi",
            "name": "SMAN CIMANGGUNG - ZONASI",
            "no_color_blind": false
          },
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 CICALENGKA",
          "name": "SHAKIRA RAHAYU NUGRAHA",
          "created_at": "2023-06-26T03:25:23.498Z",
          "accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 CICALENGKA - ZONASI"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "tmp_accepted_choice_current_position": 3,
          "tmp_accepted_option": {
            "type": "zonasi",
            "name": "SMAN 1 CICALENGKA - ZONASI"
          },
          "tmp_accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 3
        },
        {
          "registration_number": "20206202-2-100037",
          "status": "accepted",
          "distance1": 174.235,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "ketm",
            "name": "SMAN 1 CICALENGKA - KETM",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP FK. BINA MUDA",
          "name": "AUFYA MICKYALA BILQIST",
          "created_at": "2023-06-06T03:07:14.936Z",
          "accepted_option": {
            "type": "ketm",
            "name": "SMAN 1 CICALENGKA - KETM"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 3,
          "selection_current": 1
        },
        {
          "registration_number": "20206073-4-100039",
          "status": "accepted",
          "distance1": 28.521,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "perpindahan",
            "name": "SMAN 1 CICALENGKA - PERPINDAHAN TUGAS ORTU / ANAK GURU",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 CICALENGKA",
          "name": "KAYIN MAULANA FITZKY",
          "created_at": "2023-06-09T01:00:11.768Z",
          "accepted_option": {
            "type": "perpindahan",
            "name": "SMAN 1 CICALENGKA - PERPINDAHAN TUGAS ORTU / ANAK GURU"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "priority": 1,
          "accepted_choice_current_position": 3,
          "selection_current": 1
        },
        {
          "registration_number": "20206073-5-100045",
          "status": "accepted",
          "distance1": 0,
          "distance2": 0,
          "distance3": 0,
          "score": 355,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 355,
          "score_ujikom": 355,
          "first_option": {
            "type": "prestasi",
            "name": "SMAN 1 CICALENGKA - PRESTASI KEJUARAAN",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 CICALENGKA",
          "name": "M GERIN GUNAWAN",
          "created_at": "2023-06-06T11:11:35.766Z",
          "accepted_option": {
            "type": "prestasi",
            "name": "SMAN 1 CICALENGKA - PRESTASI KEJUARAAN"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 3,
          "selection_current": 1
        },
        {
          "registration_number": "20206073-3-100016",
          "status": "accepted",
          "distance1": 395.53,
          "distance2": 99999,
          "distance3": 99999,
          "score": 421.2727272727273,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "kondisi-tertentu",
            "name": "SMAN 1 CICALENGKA - KONDISI TERTENTU",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMPN 1 CICALENGKA",
          "name": "NIHAL HAYYINA JAHDA NAFI'I",
          "created_at": "2023-06-06T02:45:47.499Z",
          "accepted_option": {
            "type": "kondisi-tertentu",
            "name": "SMAN 1 CICALENGKA - KONDISI TERTENTU"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 4,
          "selection_current": 1
        },
        {
          "registration_number": "20206058-2-100026",
          "status": "accepted",
          "distance1": 237.196,
          "distance2": 99999,
          "distance3": 99999,
          "score": 0,
          "score_a1": 0,
          "score_a2": 0,
          "score_a3": 0,
          "score_kejuaraan": 0,
          "score_ujikom": 0,
          "first_option": {
            "type": "ketm",
            "name": "SMAN 1 CICALENGKA - KETM",
            "no_color_blind": false
          },
          "first_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "second_school": null,
          "second_option": null,
          "third_school": null,
          "third_option": null,
          "graduate_year": 2023,
          "graduate_type": "smp",
          "school": "SMP YADIKA 1 CICALENGKA",
          "name": "RILFA SAHARANI",
          "created_at": "2023-06-10T03:47:10.906Z",
          "accepted_option": {
            "type": "ketm",
            "name": "SMAN 1 CICALENGKA - KETM"
          },
          "accepted_school": {
            "type": "negeri",
            "level": "sma",
            "name": "SMAN 1 CICALENGKA",
            "npsn": "20251792",
            "address_city": "BANDUNG",
            "coordinate_lat": "-6.9838000",
            "coordinate_lng": "107.8420000"
          },
          "accepted_choice_current_position": 4,
          "selection_current": 1
        }
      ],
      "paginator": {
        "itemCount": 408,
        "perPage": 20,
        "pageCount": 21,
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

const route = "/api"

app.get('/', ( req, res) => {
  res.status = 200;
  res.header("Content-Type", "application/json");
  res.send(
    {
      status: "success",
      code: 200,
      message: "Selamat Datang Di API Ppdb",
      github: "https://github.com/fashaap.com"
    }
  )
})

const render = (users, res) => {
  try {
    res.status = 200;
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify({status: "success", code: 200, message: "list data", data: users }));
  } catch (error) {
    res.send(JSON.stringify({status: "error", code: 500, message: error }))
  }
}

app.get(`${route}/ppdb/sumedang`, (req, res) => {
  const users = dataSumedang
  render(users, res)
})

app.get(`${route}/ppdb/cicalengka`, (req, res) => {
  const users = dataCicalengka
  render(users, res)
})

app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`))