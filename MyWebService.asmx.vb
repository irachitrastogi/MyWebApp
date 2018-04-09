Imports System.Web.Services
Imports System.Web.Services.Protocols
Imports System.ComponentModel
Imports System.Web.Script.Services

<System.Web.Script.Services.ScriptService()>
<System.Web.Services.WebService(Namespace:="http://tempuri.org/")>
Public Class MyWebService
    Inherits System.Web.Services.WebService

    Dim JSONString As String = String.Empty

    ''' <summary>
    ''' ProcessRequest webmethod to handle all type of requests from client side.
    ''' </summary>
    ''' <param name="SessionToken">Valid session token.</param>
    ''' <param name="Action">Action defines various actions the service can do.</param>
    ''' <param name="RequestType">Type of request for the Action selected.</param>
    ''' <param name="SerializedObject">Request object in JSON serialized format.</param>
    ''' <returns>Always returns JSON object.</returns>
    ''' <remarks></remarks>
    <WebMethod(EnableSession:=True)>
    <ScriptMethod(ResponseFormat:=ResponseFormat.Json)>
    Public Function ProcessRequest(ByVal SerializedObject As String) As String
        'Public Function ProcessRequest(ByVal SessionToken As String, ByVal Action As String, ByVal RequestType As String, ByVal SerializedObject As String) As String
        Try
            'Select Case Action
            '    Case "DataLoad"
            '        'do something for dataload
            '    Case "DataSave"
            '        'do something for datasave
            '    Case Else
            '        'invalid action
            '        HttpContext.Current.Response.StatusCode = 500
            '        JSONString = "GenericError"
            'End Select
            If SerializedObject = "Hello" Then
                JSONString = "good"
            Else
                JSONString = "bad"
            End If

        Catch ex As Exception
            HttpContext.Current.Response.StatusCode = 500
            JSONString = "GenericError"
        End Try

        Return JSONString
    End Function

End Class