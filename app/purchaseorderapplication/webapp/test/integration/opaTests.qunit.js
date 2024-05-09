sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'soumikapp/purchaseorderapplication/test/integration/FirstJourney',
		'soumikapp/purchaseorderapplication/test/integration/pages/purchaseorderList',
		'soumikapp/purchaseorderapplication/test/integration/pages/purchaseorderObjectPage',
		'soumikapp/purchaseorderapplication/test/integration/pages/poitemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, purchaseorderList, purchaseorderObjectPage, poitemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('soumikapp/purchaseorderapplication') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThepurchaseorderList: purchaseorderList,
					onThepurchaseorderObjectPage: purchaseorderObjectPage,
					onThepoitemsObjectPage: poitemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);