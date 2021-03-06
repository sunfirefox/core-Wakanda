function onCollectionChange(type) {
    $$('restoreButton').hide();
    $$(type + 'DownLogIcon').hide();
    if (this.length) {
        $$(type + 'Combobox').show();
        $$(type + 'Combobox').setValue(this.hash);
        if( this.date !== "Never" ) {
            $$(type + 'DownLogIcon').show();
            if(type === 'backup'){
                $$('restoreButton').show();
            }   
        }
        
    }
}

WAF.onAfterInit = function onAfterInit() {// @lock

    // @region namespaceDeclaration// @startlock
    var saveSettings = {};	// @buttonImage
    var saveSolSettings = {};	// @button
    var closeSolSettings = {};	// @button
    var settingsSol = {};	// @container
    var debuggerCont = {};	// @container
    var browseCont = {};  // @container
    var startStopSol = {};	// @container
    var general_info_btn = {};	// @buttonImage
    var restoreButton = {};	// @icon
    var applicationSettings = {};	// @buttonImage
    var backupDownLogIcon = {};	// @icon
    var compactDownLogIcon = {};	// @icon
    var repairDownLogIcon = {};	// @icon
    var verifyDownLogIcon = {};	// @icon
    var solutionsEvent = {};	// @dataSource
    var recentSolutionsEvent = {};	// @dataSource
    var dataButton = {};	// @buttonImage
    var backupButton = {};	// @buttonImage
    var compactButton = {};	// @buttonImage
    var verifyButton = {};	// @buttonImage
    var repairButton = {};	// @buttonImage
    var compactLogsEvent = {};	// @dataSource
    var verifyLogsEvent = {};	// @dataSource
    var repairLogsEvent = {};	// @dataSource
    var backupLogsEvent = {};	// @dataSource
    var showLogsconsole = {};	// @container
    var projectsEvent = {};	// @dataSource
    var documentEvent = {};	// @document
    // @endregion// @endlock

    // eventHandlers// @lock
        
    startStopSol.click = function startStopSol_click (event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        if (sources.solutions.isRunning) {
            adminObject.stopSolution();
        } else {
            adminObject.startSolution();
        }
    };// @lock
    
    verifyButton.click = function repaireButton_click(event)// @startlock
    {// @endlock
        if( this.isDisabled() ){
            return;
        }
        adminObject.verifyApplication(sources.solutions.path, sources.projects.name);
    };// @lock

    compactButton.click = function compactButton_click(event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        adminObject.compactApplication(sources.solutions.path, sources.projects.name);
    };// @lock

    repairButton.click = function imageButton8_click(event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        adminObject.repairApplication(sources.solutions.path, sources.projects.name);
    };// @lock

    backupButton.click = function imageButton9_click(event)// @startlock
    {// @endlock
        if( this.isDisabled() ){
            return;
        }
        adminObject.backupApplication( sources.solutions.path, sources.projects.name);
    };// @lock
    
    restoreButton.click = function restoreButton_click (event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        var selectedBuckup = $$('backupCombobox');
        var date = new Date(selectedBuckup.source.formatedDate);
        adminObject.restoreApplication(sources.solutions.path, sources.projects.name,date.toString());
    };// @lock
    
    debuggerCont.click = function debuggerCont_click (event)// @startlock
    {// @endlock
        adminObject.openDebugger(sources.projects);
    };// @lock

    browseCont.click = function BrowseCont_click (event)// @startlock
    {// @endlock
        $('.modalDialog').css({'pointer-events':'auto', 'opacity':'1'});
    };// @lock

    dataButton.click = function dataButton_click(event)// @startlock
    {// @endlock
        adminObject.openDataBrowser(sources.projects);
    };// @lock
    
    // open solution settings
    settingsSol.click = function settingsSol_click (event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        adminObject.openSolutionSettings();
        $(".matrix-container .waf-state-selected").addClass('selected-tmp').removeClass('waf-state-selected');
    };// @lock

    // open project settings event
    applicationSettings.click = function applicationSettings_click(event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        adminObject.openProjectSettings(sources.solutions.path, sources.projects.name);
    };// @lock   
    
    saveSolSettings.click = function saveSolSettings_click (event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return ;
        }
        adminObject.saveSolutionSettings(sources.solutions.path);        
        $(".matrix-container .selected-tmp").addClass('waf-state-selected').removeClass('selected-tmp');
    };// @lock
    
    // save project settings event    
    saveSettings.click = function saveSettings_click (event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        adminObject.saveProjectSettings(sources.solutions.path, sources.projects.name);
       
    };// @lock

    backupDownLogIcon.click = function backupDownLogIcon_click(event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        adminObject.getLogs($$('backupCombobox').getValue());
    };// @lock

    compactDownLogIcon.click = function compactDownLogIcon_click(event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        adminObject.getLogs($$('compactCombobox').getValue());
    };// @lock

    repairDownLogIcon.click = function repairDownLogIcon_click(event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        adminObject.getLogs($$('repairCombobox').getValue());
    };// @lock

    verifyDownLogIcon.click = function verifyDownLogIcon_click(event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        adminObject.getLogs($$('verifyCombobox').getValue());
    };// @lock
    


    showLogsconsole.click = function showLogsconsole_click(event)// @startlock
    {// @endlock
        var
        console;
        if(this.isDisabled()){
            return;
        }
        console = $$('consoleContainer').$domNode;
        console.trigger('_toggle');
    };// @lock

    closeSolSettings.click = function closeSolSettings_click (event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        $('#solutionsSettingsContainer').hide();
        $("#frame3 iframe").attr("src", "");        
        $("#frame1 iframe").attr("src", "/webComponents/settingsEditor/index.html"); //@TODO ugly Hack
        if($('#settingsContainer').css('display') === 'block' ) {
        	$('#settingsContainer').hide();
        	$('#general_info_container').show();
        }
        $('#container14').show();
        
        $(".matrix-container .selected-tmp").addClass('waf-state-selected').removeClass('selected-tmp');
    };// @lock

    general_info_btn.click = function general_info_btn_click (event)// @startlock
    {// @endlock
        if(this.isDisabled()){
            return;
        }
        $('#settingsContainer').hide();
        $$('verifyButton').enable();
        $$('repairButton').enable();
        $$('backupButton').enable();
        $$('compactButton').enable();
        $$('saveSettings').disable();
        $('#general_info_container').show();
    };// @lock



    solutionsEvent.onisRunningAttributeChange = function solutionsEvent_onisRunningAttributeChange(event)// @startlock
    {// @endlock
        var label;
        
        if (this.isRunning) {            
            label = 'Stop Solution';
            this.running = '(Running)';
            $('#container1 #adminStartStopSolution').css('backgroundPosition', '0 -32px');
        } else {            
            label = 'Start Solution';
            this.running = '(Running)';
            $('#container1 #adminStartStopSolution').css('backgroundPosition', '0 0px');
        }

        $$('startStopSolution').setValue(label);

    };// @lock

    compactLogsEvent.onCollectionChange = function compactLogsEvent_onCollectionChange(event)// @startlock
    {// @endlock
        onCollectionChange.call(this, 'compact');
    };// @lock

    verifyLogsEvent.onCollectionChange = function verifyLogsEvent_onCollectionChange(event)// @startlock
    {// @endlock
        onCollectionChange.call(this, 'verify');
    };// @lock

    repairLogsEvent.onCollectionChange = function repairLogsEvent_onCollectionChange(event)// @startlock
    {// @endlock
        onCollectionChange.call(this, 'repair');
    };// @lock

    backupLogsEvent.onCollectionChange = function backupLogsEvent_onCollectionChange(event)// @startlock
    {// @endlock
        onCollectionChange.call(this, 'backup');
    };// @lock



    solutionsEvent.onCurrentElementChange = function solutionsEvent_onCurrentElementChange(event)// @startlock
    {// @endlock
        
        if(this.name == null){
            adminObject.disableInterface();
            return;
        }
        if (this.isRunning) {
            $$('dataButton').enable();
            $$('debuggerCont').enable();
            $('#debuggerCont').removeClass("waf-state-state4");
        } else {
            $$('dataButton').disable();
            $$('debuggerCont').disable();
        }

        solDetails = {
            fixedSize: this.settings.database.fixedSize +" MB",
            flushDataCacheInterval: this.settings.database.flushDataCacheInterval+" s",
            authenticationType: this.settings.solution.directory.authenticationType
        };

        sources.solDetails.sync();
        adminObject.displaySolutionProjects();
        
        // Bring solution settings
        if($("#solutionsSettingsContainer").is(":visible")){
            studio.editor.getSettingJsonData(sources.solutions.path); 
        }
        
        if($("#settingsContainer").is(":visible")){
            studio.editor.getSettingJsonData(sources.solutions.path, sources.projects.name); 
        }
        var projectContainer = $$('matrix1').getChildren()[0];
        if(typeof projectContainer !== "undefined"){
            projectContainer.addClass('waf-state-selected')
        }
        

    };// @lock

    projectsEvent.onCurrentElementChange = function projectsEvent_onCurrentElementChange(event)// @startlock
    {// @endlock
        var projectsNames;
        for (var attr in this.logFiles) {
            window[attr + 'Logs'] = this.logFiles[attr].length ? this.logFiles[attr] : [{
                "date" : "Never", 
                "hash" : "never", 
                "name" : "never", 
                "path" : ""
            }];
            sources[attr + 'Logs'].sync();
        }
        if($("#settingsContainer").is(":visible") && sources.projects.name){
            studio.editor.getSettingJsonData(sources.solutions.path, sources.projects.name); 
        }
        
        // if the project name is long then remove some characters at the end until it fit in matrix 
        projectsNames = $(".waf-clone-richText15");
        $.each( projectsNames, function( key, value ) {
            if($(value).width() > 204 ){
                while( $(value).width() > 204){
                    var projectName =  $(value).text();
                    $(value).text(projectName.substr(0,projectName.length-2));
                }
                $(value).text($(value).text() + "...");
            }
        });
        adminObject.cropProjectTitle();
        
    };// @lock

    recentSolutionsEvent.onCurrentElementChange = function recentSolutionsEvent_onCurrentElementChange(event){

        webAdmin.getSolutionInfoAsync({
            "onsuccess": function(response) {
                var
                i;

                solutions = [];

                if (response.isRunning) {
                    runPosition = i;
                    response.running = '(Running)';
                }

                
                solutions.push(response[0]);
                                
                if(i==0){
                    $('#matrix1').hide();
                } else {
                    $('#matrix1').show();
                }
                
                //admin.getSolution(response[0].hash);
                
                
                sources.solutions.sync();
                
                adminObject.console.getServerLog();
                adminObject.console.getMaintenanceLog();
                
                
                solDetails = {
                    fixedSize: sources.solutions.settings.database.fixedSize +" MB",
                    flushDataCacheInterval: sources.solutions.settings.database.flushDataCacheInterval+" s",
                    authenticationType: sources.solutions.settings.solution.directory.authenticationType
                };

                sources.solDetails.sync();
                adminObject.displaySolutionProjects();
        
                // Bring solution settings
                if($("#solutionsSettingsContainer").is(":visible")){
                    studio.editor.getSettingJsonData(sources.solutions.path); 
                }
        
                if($("#settingsContainer").is(":visible")){
                    studio.editor.getSettingJsonData(sources.solutions.path, sources.projects.name); 
                }
                var projectContainer = $$('matrix1').getChildren()[0];
                if(typeof projectContainer !== "undefined"){
                    projectContainer.addClass('waf-state-selected')
                }
        
                        
                if(typeof localStorage.callback !== "undefined"){
                    if(localStorage.callback == "compact"){                        
                        adminObject.compactApplication(localStorage.solutionPath, localStorage.projectName);
                        delete localStorage.callback;
                        delete localStorage.solutionPath;
                        delete localStorage.applicationName;
                    } else if(localStorage.callback == "repair"){
                        adminObject.repairApplication(localStorage.solutionPath, localStorage.projectName);
                        delete localStorage.callback;
                        delete localStorage.solutionPath;
                        delete localStorage.applicationName;
                    } else if(localStorage.callback == "restore"){

                        adminObject.restoreApplication(localStorage.solutionPath, localStorage.projectName, localStorage.restoreDate);
                        delete localStorage.callback;
                        delete localStorage.solutionPath;
                        delete localStorage.applicationName;
                        delete localStorage.restoreDate;
                    }
                } 
            },
            "onerror": function(error) {
                console.log(error);
            }
        },sources.recentSolutions.hash);
    };
    
    
    documentEvent.onLoad = function documentEvent_onLoad(event)// @startlock
    {// @endlock
        
        adminObject = new Admin();
        adminObject.initView();
        adminObject.init();
        $('.modalDialog .close, .modalDialog .cancel ').on('click', function(){
            $('.modalDialog').css({'pointer-events':'none', 'opacity':'0'});
        });

        $('.modalDialog .start').on('click', function(e){
            var path = $('.modalDialog input').val();
            adminObject.openSolutionByPath(path);
        });



    };// @lock

    // @region eventManager// @startlock
    WAF.addListener("saveSettings", "click", saveSettings.click, "WAF");
    WAF.addListener("saveSolSettings", "click", saveSolSettings.click, "WAF");
    WAF.addListener("closeSolSettings", "click", closeSolSettings.click, "WAF");
    WAF.addListener("debuggerCont", "click", debuggerCont.click, "WAF");
    WAF.addListener("browseCont", "click", browseCont.click, "WAF");
    WAF.addListener("settingsSol", "click", settingsSol.click, "WAF");
    WAF.addListener("startStopSol", "click", startStopSol.click, "WAF");
    WAF.addListener("general_info_btn", "click", general_info_btn.click, "WAF");
    WAF.addListener("restoreButton", "click", restoreButton.click, "WAF");
    WAF.addListener("applicationSettings", "click", applicationSettings.click, "WAF");
    WAF.addListener("backupDownLogIcon", "click", backupDownLogIcon.click, "WAF");
    WAF.addListener("compactDownLogIcon", "click", compactDownLogIcon.click, "WAF");
    WAF.addListener("repairDownLogIcon", "click", repairDownLogIcon.click, "WAF");
    WAF.addListener("verifyDownLogIcon", "click", verifyDownLogIcon.click, "WAF");
    WAF.addListener("dataButton", "click", dataButton.click, "WAF");
    WAF.addListener("backupButton", "click", backupButton.click, "WAF");
    WAF.addListener("compactButton", "click", compactButton.click, "WAF");
    WAF.addListener("verifyButton", "click", verifyButton.click, "WAF");
    WAF.addListener("repairButton", "click", repairButton.click, "WAF");
    WAF.addListener("showLogsconsole", "click", showLogsconsole.click, "WAF");
    WAF.addListener("solutions", "onisRunningAttributeChange", solutionsEvent.onisRunningAttributeChange, "WAF", "isRunning");
    WAF.addListener("compactLogs", "onCollectionChange", compactLogsEvent.onCollectionChange, "WAF");
    WAF.addListener("verifyLogs", "onCollectionChange", verifyLogsEvent.onCollectionChange, "WAF");
    WAF.addListener("repairLogs", "onCollectionChange", repairLogsEvent.onCollectionChange, "WAF");
    WAF.addListener("backupLogs", "onCollectionChange", backupLogsEvent.onCollectionChange, "WAF");
    WAF.addListener("solutions", "onCurrentElementChange", solutionsEvent.onCurrentElementChange, "WAF");
    WAF.addListener("recentSolutions", "onCurrentElementChange", recentSolutionsEvent.onCurrentElementChange, "WAF");
    WAF.addListener("projects", "onCurrentElementChange", projectsEvent.onCurrentElementChange, "WAF");
    WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock


function Admin() {
    this.reloadingSetTimeOut = [];
    
    this.resources = {
        VERIFY_INFO_MSG : 'Verifying started.',		
        VERIFY_SUCC_MSG :  'Data was verified successfully.',
        VERIFY_ERR_MSG :  '',

        REPAIR_INFO_MSG : 'Repair started.',
        REPAIR_SUCC_MSG :  'Data was repaired successfully.',
        REPAIR_ERR_MSG :  '',


        COMPACT_INFO_MSG : 'Compacting started.',
        COMPACT_SUCC_MSG :  'Data was compacted successfully.',
        COMPACT_ERR_MSG :  '',

        BACKUP_INFO_MSG :  'Backup started.',
        BACKUP_SUCC_MSG :  'Data was backed up successfully.',
        BACKUP_ERR_MSG :  '',

        RESTORE_SUCC_MSG :  'Data was restored successfully.',
        RESTORE_ERR_MSG :  '',
        RESTORE_INFO_MSG : 'Restore started.',

        STOP_SOLUTION_MSG : 'Please wait while your solution is being stopped. This process may take a few seconds.',
        START_SOLUTION_MSG : 'Please wait while your solution is starting. This process may take a few seconds.',
        START_SOLUTION_INFO_MSG : 'Solution list is empty, please open a solution first.',

        CONFIRM_MSG : 'To perform this action, the solution that is currently running on the server must be stopped. Do you want to proceed?',
        SETTINGS_SUCC_MSG : 'Please restart the server (if it is currently running) for the settings to take effect.',
        
        TIMEOUT_ID_RESIZE_END : 0

    };
    this.adminProgressBar = $$("adminProgressBar");
}


Admin.prototype = {

init: function init_admin() {
        adminObject.console.close();
        webAdmin.getRecentSolutionsAsync({
            "onsuccess": function(response) {
                var
                i,
                sol,
                runPosition = 0;

                recentSolutions = [];
                for (i = 0; sol = response[i]; i++) {
                    if (sol.isRunning) {
                        runPosition = i;
                        sol.running = '(Running)';
                    }
                    recentSolutions.push(sol);
                }
                             
                
                
                sources.recentSolutions.sync();
                sources.recentSolutions.select(runPosition);
                // workaround: combobox does not display selected element at loading 
                if (!runPosition) {
                    $$('solutionCombobox').setValue(sources.recentSolutions.hash);
                }
            },
            "onerror": function(error) {
                console.log(error);
            }
        });
    },
    displaySolutionProjects: function displaySolutionProjects() {
        var i;
        projects = [];
        
        for (i = 0; i < sources.solutions.apps.length; i++) {
            projects.push({
                name    : sources.solutions.apps[i].name,
                waData  : sources.solutions.apps[i].waData,
                waModel : sources.solutions.apps[i].waModel,
                logFiles: sources.solutions.apps[i].files,
                http    : sources.solutions.apps[i].http
            });
        }
        if(i==0){
            $('#matrix1').hide();
        } else {
            $('#matrix1').show();
        }
        
        sources.projects.sync();
    },

    waitServerAndCallback: function wait_server_and_reload(callback) {
        var i;
        try {
            webAdmin.getCurrentRunningHashAsync({
                "onsuccess": function(response) {
                    if (response !== null) {
                        for (i = 0; i < adminObject.reloadingSetTimeOut.length; i++) {
                            clearTimeout(adminObject.reloadingSetTimeOut[i]);
                        }
                        adminObject.reloadingSetTimeOut = [];
                        if (callback === null) {
                            window.location.reload();
                        } else {
                            console.log("response is: ", response);
                            callback();
                        }
                    } else {
                        console.log("response is: ", response);
                        adminObject.reloadingSetTimeOut.push(setTimeout(adminObject.waitServerAndCallback, 1000, callback));
                    }
                },
                "onerror": function(error) {
                    console.log("error is: ", error);
                    if (error.code === -32603 && error.message.indexOf('failed permission') !== -1) {
                        window.location.reload();
                    } else {
                        adminObject.reloadingSetTimeOut.push(setTimeout(adminObject.waitServerAndCallback, 1000, callback));
                    }
                }
            });

        } catch (e) {
            console.log("catch: ", e);
            adminObject.reloadingSetTimeOut.push(setTimeout(adminObject.waitServerAndCallback, 1000, callback));
        }
        
    }
};