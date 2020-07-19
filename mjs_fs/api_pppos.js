let PPPOS = {
  _imei: ffi('char* mgos_pppos_get_imei_js(int)'),
  _iccid: ffi('char* mgos_pppos_get_iccid_js(int)'),

  imei: function() {
    return this._imei(0);
  },

  iccid: function() {
    return this._iccid(0);
  },

};
