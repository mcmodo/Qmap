ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2180").setExtent([340709.301868, 497528.635978, 369027.679913, 513375.590025]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_uslugi_wadresach_1 = new ol.format.GeoJSON();
var features_uslugi_wadresach_1 = format_uslugi_wadresach_1.readFeatures(json_uslugi_wadresach_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_uslugi_wadresach_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uslugi_wadresach_1.addFeatures(features_uslugi_wadresach_1);
var lyr_uslugi_wadresach_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_uslugi_wadresach_1, 
                style: style_uslugi_wadresach_1,
                interactive: true,
                title: '<img src="styles/legend/uslugi_wadresach_1.png" /> uslugi_wadresach'
            });
var format_wezly_2 = new ol.format.GeoJSON();
var features_wezly_2 = format_wezly_2.readFeatures(json_wezly_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_wezly_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wezly_2.addFeatures(features_wezly_2);
var lyr_wezly_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wezly_2, 
                style: style_wezly_2,
                interactive: true,
                title: '<img src="styles/legend/wezly_2.png" /> wezly'
            });
var format_punkty_elastycznosci_3 = new ol.format.GeoJSON();
var features_punkty_elastycznosci_3 = format_punkty_elastycznosci_3.readFeatures(json_punkty_elastycznosci_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_punkty_elastycznosci_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_punkty_elastycznosci_3.addFeatures(features_punkty_elastycznosci_3);
var lyr_punkty_elastycznosci_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_punkty_elastycznosci_3, 
                style: style_punkty_elastycznosci_3,
                interactive: true,
                title: '<img src="styles/legend/punkty_elastycznosci_3.png" /> punkty_elastycznosci'
            });
var format_liniekablowe_4 = new ol.format.GeoJSON();
var features_liniekablowe_4 = format_liniekablowe_4.readFeatures(json_liniekablowe_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_liniekablowe_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_liniekablowe_4.addFeatures(features_liniekablowe_4);
var lyr_liniekablowe_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_liniekablowe_4, 
                style: style_liniekablowe_4,
                interactive: true,
                title: '<img src="styles/legend/liniekablowe_4.png" /> liniekablowe'
            });
var format_linie_bezprzewodowe_5 = new ol.format.GeoJSON();
var features_linie_bezprzewodowe_5 = format_linie_bezprzewodowe_5.readFeatures(json_linie_bezprzewodowe_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_linie_bezprzewodowe_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linie_bezprzewodowe_5.addFeatures(features_linie_bezprzewodowe_5);
var lyr_linie_bezprzewodowe_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linie_bezprzewodowe_5, 
                style: style_linie_bezprzewodowe_5,
                interactive: true,
                title: '<img src="styles/legend/linie_bezprzewodowe_5.png" /> linie_bezprzewodowe'
            });

lyr_OSMStandard_0.setVisible(true);lyr_uslugi_wadresach_1.setVisible(true);lyr_wezly_2.setVisible(true);lyr_punkty_elastycznosci_3.setVisible(true);lyr_liniekablowe_4.setVisible(true);lyr_linie_bezprzewodowe_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_uslugi_wadresach_1,lyr_wezly_2,lyr_punkty_elastycznosci_3,lyr_liniekablowe_4,lyr_linie_bezprzewodowe_5];
lyr_uslugi_wadresach_1.set('fieldAliases', {'fid': 'fid', 'ua01_id_punktu_adresowego': 'ua01_id_punktu_adresowego', 'ua02_id_pe': 'ua02_id_pe', 'ua03_id_po': 'ua03_id_po', 'ua04_terc': 'ua04_terc', 'ua05_simc': 'ua05_simc', 'ua06_ulic': 'ua06_ulic', 'ua07_nr_porzadkowy': 'ua07_nr_porzadkowy', 'ua08_szerokosc': 'ua08_szerokosc', 'ua09_dlugosc': 'ua09_dlugosc', 'ua10_medium_dochodzace_do_pa': 'ua10_medium_dochodzace_do_pa', 'ua11_technologia_dostepowa': 'ua11_technologia_dostepowa', 'ua12_instalacja_telekom': 'ua12_instalacja_telekom', 'ua13_medium_instalacji_budynku': 'ua13_medium_instalacji_budynku', 'ua14_technologia_dostepowa': 'ua14_technologia_dostepowa', 'ua15_identyfikacja_uslugi': 'ua15_identyfikacja_uslugi', 'ua16_dostep_stacjonarny': 'ua16_dostep_stacjonarny', 'ua17_dostep_stacjonarny_bezprzewodowy': 'ua17_dostep_stacjonarny_bezprzewodowy', 'ua18_telewizja_cyfrowa': 'ua18_telewizja_cyfrowa', 'ua19_radio': 'ua19_radio', 'ua20_usluga_telefoniczna': 'ua20_usluga_telefoniczna', 'ua21_predkosc_uslugi_td': 'ua21_predkosc_uslugi_td', 'ua22_liczba_uzytkownikow_uslugi_td': 'ua22_liczba_uzytkownikow_uslugi_td', });
lyr_wezly_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'we01_id_wezla': 'we01_id_wezla', 'we02_tytul_do_wezla': 'we02_tytul_do_wezla', 'we03_id_podmiotu_obcego': 'we03_id_podmiotu_obcego', 'we04_terc': 'we04_terc', 'we05_simc': 'we05_simc', 'we06_ulic': 'we06_ulic', 'we07_nr_porzadkowy': 'we07_nr_porzadkowy', 'we08_szerokosc': 'we08_szerokosc', 'we09_dlugosc': 'we09_dlugosc', 'we10_medium_transmisyjne': 'we10_medium_transmisyjne', 'we11_bsa': 'we11_bsa', 'we12_technologia_dostepowa': 'we12_technologia_dostepowa', 'we13_uslugi_transmisji_danych': 'we13_uslugi_transmisji_danych', 'we14_mozliwosc_zwiekszenia_liczby_interfejsow': 'we14_mozliwosc_zwiekszenia_liczby_interfejsow', 'we15_finansowanie_publ': 'we15_finansowanie_publ', 'we16_numery_projektow_publ': 'we16_numery_projektow_publ', 'we17_infrastruktura_o_duzym_znaczeniu': 'we17_infrastruktura_o_duzym_znaczeniu', 'we18_typ_interfejsu': 'we18_typ_interfejsu', 'we19_udostepnianie_ethernet': 'we19_udostepnianie_ethernet', });
lyr_punkty_elastycznosci_3.set('fieldAliases', {'fid': 'fid', 'pe01_id_pe': 'pe01_id_pe', 'pe02_typ_pe': 'pe02_typ_pe', 'pe03_id_wezla': 'pe03_id_wezla', 'pe04_pdu': 'pe04_pdu', 'pe05_terc': 'pe05_terc', 'pe06_simc': 'pe06_simc', 'pe07_ulic': 'pe07_ulic', 'pe08_nr_porzadkowy': 'pe08_nr_porzadkowy', 'pe09_szerokosc': 'pe09_szerokosc', 'pe10_dlugosc': 'pe10_dlugosc', 'pe11_medium_transmisyjne': 'pe11_medium_transmisyjne', 'pe12_technologia_dostepowa': 'pe12_technologia_dostepowa', 'pe13_mozliwosc_swiadczenia_uslug': 'pe13_mozliwosc_swiadczenia_uslug', 'pe14_finansowanie_publ': 'pe14_finansowanie_publ', 'pe15_numery_projektow_publ': 'pe15_numery_projektow_publ', });
lyr_liniekablowe_4.set('fieldAliases', {'fid': 'fid', 'lk01_id_lk': 'lk01_id_lk', 'lk02_id_punktu_poczatkowego': 'lk02_id_punktu_poczatkowego', 'lk04_id_punktu_koncowego': 'lk04_id_punktu_koncowego', 'lk05_medium_transmisyjne': 'lk05_medium_transmisyjne', 'lk06_rodzaj_linii_kablowej': 'lk06_rodzaj_linii_kablowej', 'lk07_liczba_wlokien': 'lk07_liczba_wlokien', 'lk08_liczba_wlokien_wykorzystywanych': 'lk08_liczba_wlokien_wykorzystywanych', 'lk09_liczba_wlokien_udostepnienia': 'lk09_liczba_wlokien_udostepnienia', 'lk10_finansowanie_publ': 'lk10_finansowanie_publ', 'lk11_numery_projektow_publ': 'lk11_numery_projektow_publ', 'lk12_infrastruktura_o_duzym_znaczeniu': 'lk12_infrastruktura_o_duzym_znaczeniu', });
lyr_linie_bezprzewodowe_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'lb01_id_lb': 'lb01_id_lb', 'lb02_id_punktu_poczatkowego': 'lb02_id_punktu_poczatkowego', 'lb03_id_punktu_koncowego': 'lb03_id_punktu_koncowego', 'lb04_medium_transmisyjne': 'lb04_medium_transmisyjne', 'lb05_nr_pozwolenia_radiowego': 'lb05_nr_pozwolenia_radiowego', 'lb06_pasmo_radiowe': 'lb06_pasmo_radiowe', 'lb07_system_transmisyjny': 'lb07_system_transmisyjny', 'lb08_przepustowosc': 'lb08_przepustowosc', 'lb09_mozliwosc_udostepniania': 'lb09_mozliwosc_udostepniania', });
lyr_uslugi_wadresach_1.set('fieldImages', {'fid': 'TextEdit', 'ua01_id_punktu_adresowego': 'TextEdit', 'ua02_id_pe': 'TextEdit', 'ua03_id_po': 'TextEdit', 'ua04_terc': 'TextEdit', 'ua05_simc': 'TextEdit', 'ua06_ulic': 'TextEdit', 'ua07_nr_porzadkowy': 'TextEdit', 'ua08_szerokosc': 'TextEdit', 'ua09_dlugosc': 'TextEdit', 'ua10_medium_dochodzace_do_pa': 'TextEdit', 'ua11_technologia_dostepowa': 'TextEdit', 'ua12_instalacja_telekom': 'TextEdit', 'ua13_medium_instalacji_budynku': 'TextEdit', 'ua14_technologia_dostepowa': 'TextEdit', 'ua15_identyfikacja_uslugi': 'TextEdit', 'ua16_dostep_stacjonarny': 'TextEdit', 'ua17_dostep_stacjonarny_bezprzewodowy': 'TextEdit', 'ua18_telewizja_cyfrowa': 'TextEdit', 'ua19_radio': 'TextEdit', 'ua20_usluga_telefoniczna': 'TextEdit', 'ua21_predkosc_uslugi_td': 'TextEdit', 'ua22_liczba_uzytkownikow_uslugi_td': 'TextEdit', });
lyr_wezly_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'we01_id_wezla': 'TextEdit', 'we02_tytul_do_wezla': 'TextEdit', 'we03_id_podmiotu_obcego': 'TextEdit', 'we04_terc': 'TextEdit', 'we05_simc': 'TextEdit', 'we06_ulic': 'TextEdit', 'we07_nr_porzadkowy': 'TextEdit', 'we08_szerokosc': 'TextEdit', 'we09_dlugosc': 'TextEdit', 'we10_medium_transmisyjne': 'TextEdit', 'we11_bsa': 'TextEdit', 'we12_technologia_dostepowa': 'TextEdit', 'we13_uslugi_transmisji_danych': 'TextEdit', 'we14_mozliwosc_zwiekszenia_liczby_interfejsow': 'TextEdit', 'we15_finansowanie_publ': 'TextEdit', 'we16_numery_projektow_publ': 'TextEdit', 'we17_infrastruktura_o_duzym_znaczeniu': 'TextEdit', 'we18_typ_interfejsu': 'TextEdit', 'we19_udostepnianie_ethernet': 'TextEdit', });
lyr_punkty_elastycznosci_3.set('fieldImages', {'fid': 'TextEdit', 'pe01_id_pe': 'TextEdit', 'pe02_typ_pe': 'TextEdit', 'pe03_id_wezla': 'TextEdit', 'pe04_pdu': 'TextEdit', 'pe05_terc': 'TextEdit', 'pe06_simc': 'TextEdit', 'pe07_ulic': 'TextEdit', 'pe08_nr_porzadkowy': 'TextEdit', 'pe09_szerokosc': 'TextEdit', 'pe10_dlugosc': 'TextEdit', 'pe11_medium_transmisyjne': 'TextEdit', 'pe12_technologia_dostepowa': 'TextEdit', 'pe13_mozliwosc_swiadczenia_uslug': 'TextEdit', 'pe14_finansowanie_publ': 'TextEdit', 'pe15_numery_projektow_publ': 'TextEdit', });
lyr_liniekablowe_4.set('fieldImages', {'fid': '', 'lk01_id_lk': '', 'lk02_id_punktu_poczatkowego': '', 'lk04_id_punktu_koncowego': '', 'lk05_medium_transmisyjne': '', 'lk06_rodzaj_linii_kablowej': '', 'lk07_liczba_wlokien': '', 'lk08_liczba_wlokien_wykorzystywanych': '', 'lk09_liczba_wlokien_udostepnienia': '', 'lk10_finansowanie_publ': '', 'lk11_numery_projektow_publ': '', 'lk12_infrastruktura_o_duzym_znaczeniu': '', });
lyr_linie_bezprzewodowe_5.set('fieldImages', {'fid': '', 'id': '', 'lb01_id_lb': '', 'lb02_id_punktu_poczatkowego': '', 'lb03_id_punktu_koncowego': '', 'lb04_medium_transmisyjne': '', 'lb05_nr_pozwolenia_radiowego': '', 'lb06_pasmo_radiowe': '', 'lb07_system_transmisyjny': '', 'lb08_przepustowosc': '', 'lb09_mozliwosc_udostepniania': '', });
lyr_uslugi_wadresach_1.set('fieldLabels', {'fid': 'inline label', 'ua01_id_punktu_adresowego': 'header label', 'ua02_id_pe': 'header label', 'ua03_id_po': 'header label', 'ua04_terc': 'inline label', 'ua05_simc': 'inline label', 'ua06_ulic': 'inline label', 'ua07_nr_porzadkowy': 'inline label', 'ua08_szerokosc': 'header label', 'ua09_dlugosc': 'header label', 'ua10_medium_dochodzace_do_pa': 'header label', 'ua11_technologia_dostepowa': 'header label', 'ua12_instalacja_telekom': 'header label', 'ua13_medium_instalacji_budynku': 'header label', 'ua14_technologia_dostepowa': 'header label', 'ua15_identyfikacja_uslugi': 'header label', 'ua16_dostep_stacjonarny': 'header label', 'ua17_dostep_stacjonarny_bezprzewodowy': 'header label', 'ua18_telewizja_cyfrowa': 'inline label', 'ua19_radio': 'inline label', 'ua20_usluga_telefoniczna': 'inline label', 'ua21_predkosc_uslugi_td': 'inline label', 'ua22_liczba_uzytkownikow_uslugi_td': 'inline label', });
lyr_wezly_2.set('fieldLabels', {'fid': 'inline label', 'id': 'inline label', 'we01_id_wezla': 'header label', 'we02_tytul_do_wezla': 'inline label', 'we03_id_podmiotu_obcego': 'header label', 'we04_terc': 'inline label', 'we05_simc': 'inline label', 'we06_ulic': 'inline label', 'we07_nr_porzadkowy': 'inline label', 'we08_szerokosc': 'header label', 'we09_dlugosc': 'header label', 'we10_medium_transmisyjne': 'inline label', 'we11_bsa': 'inline label', 'we12_technologia_dostepowa': 'header label', 'we13_uslugi_transmisji_danych': 'header label', 'we14_mozliwosc_zwiekszenia_liczby_interfejsow': 'inline label', 'we15_finansowanie_publ': 'inline label', 'we16_numery_projektow_publ': 'inline label', 'we17_infrastruktura_o_duzym_znaczeniu': 'inline label', 'we18_typ_interfejsu': 'inline label', 'we19_udostepnianie_ethernet': 'inline label', });
lyr_punkty_elastycznosci_3.set('fieldLabels', {'fid': 'inline label', 'pe01_id_pe': 'header label', 'pe02_typ_pe': 'header label', 'pe03_id_wezla': 'header label', 'pe04_pdu': 'inline label', 'pe05_terc': 'inline label', 'pe06_simc': 'inline label', 'pe07_ulic': 'inline label', 'pe08_nr_porzadkowy': 'inline label', 'pe09_szerokosc': 'header label', 'pe10_dlugosc': 'header label', 'pe11_medium_transmisyjne': 'header label', 'pe12_technologia_dostepowa': 'header label', 'pe13_mozliwosc_swiadczenia_uslug': 'inline label', 'pe14_finansowanie_publ': 'inline label', 'pe15_numery_projektow_publ': 'inline label', });
lyr_liniekablowe_4.set('fieldLabels', {'fid': 'inline label', 'lk01_id_lk': 'header label', 'lk02_id_punktu_poczatkowego': 'header label', 'lk04_id_punktu_koncowego': 'header label', 'lk05_medium_transmisyjne': 'inline label', 'lk06_rodzaj_linii_kablowej': 'inline label', 'lk07_liczba_wlokien': 'inline label', 'lk08_liczba_wlokien_wykorzystywanych': 'inline label', 'lk09_liczba_wlokien_udostepnienia': 'inline label', 'lk10_finansowanie_publ': 'inline label', 'lk11_numery_projektow_publ': 'inline label', 'lk12_infrastruktura_o_duzym_znaczeniu': 'inline label', });
lyr_linie_bezprzewodowe_5.set('fieldLabels', {'fid': 'inline label', 'id': 'header label', 'lb01_id_lb': 'inline label', 'lb02_id_punktu_poczatkowego': 'header label', 'lb03_id_punktu_koncowego': 'header label', 'lb04_medium_transmisyjne': 'inline label', 'lb05_nr_pozwolenia_radiowego': 'inline label', 'lb06_pasmo_radiowe': 'inline label', 'lb07_system_transmisyjny': 'inline label', 'lb08_przepustowosc': 'inline label', 'lb09_mozliwosc_udostepniania': 'inline label', });
lyr_linie_bezprzewodowe_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});