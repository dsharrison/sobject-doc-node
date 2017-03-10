module.exports = `<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionOverrides>
        <actionName>Accept</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>CancelEdit</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Clone</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Delete</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Edit</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Follow</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>List</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>New</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>SaveEdit</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>Tab</actionName>
        <type>Default</type>
    </actionOverrides>
    <actionOverrides>
        <actionName>View</actionName>
        <type>Default</type>
    </actionOverrides>
    <compactLayoutAssignment>SYSTEM</compactLayoutAssignment>
    <deploymentStatus>Deployed</deploymentStatus>
    <enableActivities>false</enableActivities>
    <enableBulkApi>true</enableBulkApi>
    <enableFeeds>false</enableFeeds>
    <enableHistory>false</enableHistory>
    <enableReports>false</enableReports>
    <enableSharing>true</enableSharing>
    <enableStreamingApi>true</enableStreamingApi>
    <fields>
        <fullName>Distributor__c</fullName>
        <deleteConstraint>SetNull</deleteConstraint>
        <externalId>false</externalId>
        <label>Distributor</label>
        <referenceTo>Account</referenceTo>
        <relationshipLabel>Beer Emporiums</relationshipLabel>
        <relationshipName>Beer_Emporiums</relationshipName>
        <required>false</required>
        <trackTrending>false</trackTrending>
        <type>Lookup</type>
    </fields>
    <fields>
        <fullName>Employee_Size__c</fullName>
        <externalId>false</externalId>
        <label>Employee Size</label>
        <picklist>
            <picklistValues>
                <fullName>0 to 10</fullName>
                <default>true</default>
            </picklistValues>
            <picklistValues>
                <fullName>10 to 20</fullName>
                <default>false</default>
            </picklistValues>
            <picklistValues>
                <fullName>20 to 100</fullName>
                <default>false</default>
            </picklistValues>
            <restrictedPicklist>true</restrictedPicklist>
            <sorted>false</sorted>
        </picklist>
        <trackTrending>false</trackTrending>
        <type>Picklist</type>
    </fields>
    <fields>
        <fullName>Satisfaction_Rating__c</fullName>
        <externalId>false</externalId>
        <label>Satisfaction Rating</label>
        <precision>3</precision>
        <required>false</required>
        <scale>0</scale>
        <trackTrending>false</trackTrending>
        <type>Percent</type>
    </fields>
    <label>Beer Emporium</label>
    <nameField>
        <label>Beer Emporium Name</label>
        <type>Text</type>
    </nameField>
    <pluralLabel>Beer Emporium</pluralLabel>
    <searchLayouts/>
    <sharingModel>ReadWrite</sharingModel>
</CustomObject>`;
