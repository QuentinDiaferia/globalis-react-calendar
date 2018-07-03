// https://github.com/damienlabat/moment-ferie-fr
(function () {

  "use strict";

  var initialize = function (moment) {

    // Source: http://techneilogy.blogspot.fr/2012/02/couple-of-years-ago-i-posted-source.html
    moment.fn.easterDay = moment.fn.paques = function (year) {
         /*
         G is the Golden Number-1
         H is 23-Epact (modulo 30)
         I is the number of days from 21 March to the Paschal full moon
         J is the weekday for the Paschal full moon (0=Sunday,
           1=Monday, etc.)
         L is the number of days from 21 March to the Sunday on or before
           the Paschal full moon (a number between -6 and 28)
        */
        if (year === undefined) {
            year = this.year();
        }
        const G = year % 19;
        const C = Math.floor(year / 100);
        const H = Math.floor(C - Math.floor(C / 4) - Math.floor((8*C+13) / 25) + 19*G + 15) % 30;
        const I = Math.floor(H - Math.floor(H / 28)*(1 - Math.floor(H / 28)*Math.floor(29 / (H + 1))*(Math.floor(21 - G) / 11)));
        const J = (year + Math.floor(year/4) + I + 2 - C + Math.floor(C/4)) % 7;
        const L = I - J;
        const m = 3 + Math.floor((L + 40) / 44);
        const d = L + 28 - 31 * (Math.floor(m / 4));
        return moment(new Date(year, m-1, d, 12));
    };

    moment.fn.lundiDePaques = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment.fn.paques(Y).add(1, "days");
    };

    moment.fn.ascension = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment.fn.paques(Y).add(39, "days");
    };

    moment.fn.pentecote = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment.fn.paques(Y).add(50, "days");
    };

    moment.fn.jourDeLAn = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("1-1-" + Y, "DD-MM-YYYY");
    };

    moment.fn.feteDuTravail = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("1-5-" + Y, "DD-MM-YYYY");
    };

    moment.fn.victoireDeAllies = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("8-5-" + Y, "DD-MM-YYYY");
    };

    moment.fn.feteNationale = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("14-7-" + Y, "DD-MM-YYYY");
    };

    moment.fn.assomption = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("15-8-" + Y, "DD-MM-YYYY");
    };

    moment.fn.toussaint = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("1-11-" + Y, "DD-MM-YYYY");
    };

    moment.fn.armistice = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("11-11-" + Y, "DD-MM-YYYY");
    };

    moment.fn.noel = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }
      return moment("25-12-" + Y, "DD-MM-YYYY");
    };

    var listeFerie = {
      "Jour de l'an": moment.fn.jourDeLAn,
      "Fête du travail": moment.fn.feteDuTravail,
      "Victoire des alliés": moment.fn.victoireDeAllies,
      "Fête Nationale": moment.fn.feteNationale,
      "Assomption": moment.fn.assomption,
      "Toussaint": moment.fn.toussaint,
      "Armistice": moment.fn.armistice,
      "Noël": moment.fn.noel,
      "Pâques": moment.fn.paques,
      "Lundi de Pâques": moment.fn.lundiDePaques,
      "Ascension": moment.fn.ascension,
      "Pentecôte": moment.fn.pentecote
    };

    moment.fn.getFerieList = function (Y) {
      if (Y === undefined) {
        Y = this.year();
      }

      var res = [];
      for (var key in listeFerie) {
        if (listeFerie.hasOwnProperty(key)) {
          res.push({name: key, date: listeFerie[key](Y) });
        }
      }
      return res;
    };

    moment.fn.getFerie = function () {
      for (var key in listeFerie) {
        if (listeFerie.hasOwnProperty(key)) {
          if (this.isSame(listeFerie[key].call(this), 'days')) {
            return key;
          }
        }
      }
      return null;
    };

    moment.fn.isFerie = function () {
      return (this.getFerie() !== null);
    };

    moment.fn.isWeekEnd = function () {
      return (this.day() === 0 || this.day() === 6);
    };

    moment.fn.isWorkingDay = function () {
      return (!this.isWeekEnd() && !this.isFerie());
    };

    return moment;
  };

  if (typeof define === "function" && define.amd) {
    define("moment-ferie-fr", ["moment"], function (moment) {
      return this.moment = initialize(moment);
    });
  } else if (typeof module !== "undefined") {
    module.exports = initialize(require("moment"));
  } else if (typeof window !== "undefined" && window.moment) {
    this.moment = initialize(this.moment);
  }

}).call(this);
