/**
 * 
 */

/*
 * Cria um objeto XML HTTP Request
 */
function createRequest()
{
	var xmlhttp;
	try 
	{
		// genérico
		xmlhttp = new XMLHttpRequest();
	} 
	catch (tryMS) 
	{
		try 
		{
			// exclusivo para MS
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} 
		catch (otherMS) 
		{
			try 
			{
				// exclusivo para outro tipo de MS
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} 
			catch (failed) 
			{
				// navegador não compatível
				// xmlhttp = null;
				new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
	}
	return xmlhttp;
}
