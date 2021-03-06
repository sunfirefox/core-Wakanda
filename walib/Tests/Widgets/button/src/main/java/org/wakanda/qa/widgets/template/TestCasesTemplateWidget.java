package org.wakanda.qa.widgets.template;

import java.util.Arrays;
import java.util.Collection;

import org.junit.runners.Parameterized.Parameters;
import org.wakanda.wastudio.common.TemplateSelenium;

public class TestCasesTemplateWidget extends TemplateSelenium{
	
	public TestCasesTemplateWidget(eBrowser browserName,String nomSolution,boolean launchServerOnlyOneTime) {
		super(browserName,nomSolution,launchServerOnlyOneTime);
	}
	
	@Parameters
	public static Collection<Object[]> getdata() {
		Object[][] data = new Object[][] {
			{eBrowser.chrome,"WidgetsAPI",true }
		};
		return Arrays.asList(data);
	}
	public void maximizeWindow() {}
}
