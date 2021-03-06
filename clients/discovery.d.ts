import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Discovery extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Discovery.Types.ClientConfiguration)
  config: Config & Discovery.Types.ClientConfiguration;
  /**
   * Associates one or more configuration items with an application.
   */
  associateConfigurationItemsToApplication(params: Discovery.Types.AssociateConfigurationItemsToApplicationRequest, callback?: (err: AWSError, data: Discovery.Types.AssociateConfigurationItemsToApplicationResponse) => void): Request<Discovery.Types.AssociateConfigurationItemsToApplicationResponse, AWSError>;
  /**
   * Associates one or more configuration items with an application.
   */
  associateConfigurationItemsToApplication(callback?: (err: AWSError, data: Discovery.Types.AssociateConfigurationItemsToApplicationResponse) => void): Request<Discovery.Types.AssociateConfigurationItemsToApplicationResponse, AWSError>;
  /**
   * Creates an application with the given name and description.
   */
  createApplication(params: Discovery.Types.CreateApplicationRequest, callback?: (err: AWSError, data: Discovery.Types.CreateApplicationResponse) => void): Request<Discovery.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates an application with the given name and description.
   */
  createApplication(callback?: (err: AWSError, data: Discovery.Types.CreateApplicationResponse) => void): Request<Discovery.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
   */
  createTags(params: Discovery.Types.CreateTagsRequest, callback?: (err: AWSError, data: Discovery.Types.CreateTagsResponse) => void): Request<Discovery.Types.CreateTagsResponse, AWSError>;
  /**
   * Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
   */
  createTags(callback?: (err: AWSError, data: Discovery.Types.CreateTagsResponse) => void): Request<Discovery.Types.CreateTagsResponse, AWSError>;
  /**
   * Deletes a list of applications and their associations with configuration items.
   */
  deleteApplications(params: Discovery.Types.DeleteApplicationsRequest, callback?: (err: AWSError, data: Discovery.Types.DeleteApplicationsResponse) => void): Request<Discovery.Types.DeleteApplicationsResponse, AWSError>;
  /**
   * Deletes a list of applications and their associations with configuration items.
   */
  deleteApplications(callback?: (err: AWSError, data: Discovery.Types.DeleteApplicationsResponse) => void): Request<Discovery.Types.DeleteApplicationsResponse, AWSError>;
  /**
   * Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
   */
  deleteTags(params: Discovery.Types.DeleteTagsRequest, callback?: (err: AWSError, data: Discovery.Types.DeleteTagsResponse) => void): Request<Discovery.Types.DeleteTagsResponse, AWSError>;
  /**
   * Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
   */
  deleteTags(callback?: (err: AWSError, data: Discovery.Types.DeleteTagsResponse) => void): Request<Discovery.Types.DeleteTagsResponse, AWSError>;
  /**
   * Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an ID.
   */
  describeAgents(params: Discovery.Types.DescribeAgentsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeAgentsResponse) => void): Request<Discovery.Types.DescribeAgentsResponse, AWSError>;
  /**
   * Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an ID.
   */
  describeAgents(callback?: (err: AWSError, data: Discovery.Types.DescribeAgentsResponse) => void): Request<Discovery.Types.DescribeAgentsResponse, AWSError>;
  /**
   * Retrieves attributes for a list of configuration item IDs. All of the supplied IDs must be for the same asset type (server, application, process, or connection). Output fields are specific to the asset type selected. For example, the output for a server configuration item includes a list of attributes about the server, such as host name, operating system, and number of network cards. For a complete list of outputs for each asset type, see Querying Discovered Configuration Items.
   */
  describeConfigurations(params: Discovery.Types.DescribeConfigurationsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeConfigurationsResponse) => void): Request<Discovery.Types.DescribeConfigurationsResponse, AWSError>;
  /**
   * Retrieves attributes for a list of configuration item IDs. All of the supplied IDs must be for the same asset type (server, application, process, or connection). Output fields are specific to the asset type selected. For example, the output for a server configuration item includes a list of attributes about the server, such as host name, operating system, and number of network cards. For a complete list of outputs for each asset type, see Querying Discovered Configuration Items.
   */
  describeConfigurations(callback?: (err: AWSError, data: Discovery.Types.DescribeConfigurationsResponse) => void): Request<Discovery.Types.DescribeConfigurationsResponse, AWSError>;
  /**
   * Retrieves the status of a given export process. You can retrieve status from a maximum of 100 processes.
   */
  describeExportConfigurations(params: Discovery.Types.DescribeExportConfigurationsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeExportConfigurationsResponse) => void): Request<Discovery.Types.DescribeExportConfigurationsResponse, AWSError>;
  /**
   * Retrieves the status of a given export process. You can retrieve status from a maximum of 100 processes.
   */
  describeExportConfigurations(callback?: (err: AWSError, data: Discovery.Types.DescribeExportConfigurationsResponse) => void): Request<Discovery.Types.DescribeExportConfigurationsResponse, AWSError>;
  /**
   * Retrieves a list of configuration items that are tagged with a specific tag. Or retrieves a list of all tags assigned to a specific configuration item.
   */
  describeTags(params: Discovery.Types.DescribeTagsRequest, callback?: (err: AWSError, data: Discovery.Types.DescribeTagsResponse) => void): Request<Discovery.Types.DescribeTagsResponse, AWSError>;
  /**
   * Retrieves a list of configuration items that are tagged with a specific tag. Or retrieves a list of all tags assigned to a specific configuration item.
   */
  describeTags(callback?: (err: AWSError, data: Discovery.Types.DescribeTagsResponse) => void): Request<Discovery.Types.DescribeTagsResponse, AWSError>;
  /**
   * Disassociates one or more configuration items from an application.
   */
  disassociateConfigurationItemsFromApplication(params: Discovery.Types.DisassociateConfigurationItemsFromApplicationRequest, callback?: (err: AWSError, data: Discovery.Types.DisassociateConfigurationItemsFromApplicationResponse) => void): Request<Discovery.Types.DisassociateConfigurationItemsFromApplicationResponse, AWSError>;
  /**
   * Disassociates one or more configuration items from an application.
   */
  disassociateConfigurationItemsFromApplication(callback?: (err: AWSError, data: Discovery.Types.DisassociateConfigurationItemsFromApplicationResponse) => void): Request<Discovery.Types.DisassociateConfigurationItemsFromApplicationResponse, AWSError>;
  /**
   * Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID which you can query using the DescribeExportConfigurations API. The system imposes a limit of two configuration exports in six hours.
   */
  exportConfigurations(callback?: (err: AWSError, data: Discovery.Types.ExportConfigurationsResponse) => void): Request<Discovery.Types.ExportConfigurationsResponse, AWSError>;
  /**
   * Retrieves a short summary of discovered assets.
   */
  getDiscoverySummary(params: Discovery.Types.GetDiscoverySummaryRequest, callback?: (err: AWSError, data: Discovery.Types.GetDiscoverySummaryResponse) => void): Request<Discovery.Types.GetDiscoverySummaryResponse, AWSError>;
  /**
   * Retrieves a short summary of discovered assets.
   */
  getDiscoverySummary(callback?: (err: AWSError, data: Discovery.Types.GetDiscoverySummaryResponse) => void): Request<Discovery.Types.GetDiscoverySummaryResponse, AWSError>;
  /**
   * Retrieves a list of configuration items according to criteria you specify in a filter. The filter criteria identify relationship requirements.
   */
  listConfigurations(params: Discovery.Types.ListConfigurationsRequest, callback?: (err: AWSError, data: Discovery.Types.ListConfigurationsResponse) => void): Request<Discovery.Types.ListConfigurationsResponse, AWSError>;
  /**
   * Retrieves a list of configuration items according to criteria you specify in a filter. The filter criteria identify relationship requirements.
   */
  listConfigurations(callback?: (err: AWSError, data: Discovery.Types.ListConfigurationsResponse) => void): Request<Discovery.Types.ListConfigurationsResponse, AWSError>;
  /**
   * Retrieves a list of servers which are one network hop away from a specified server.
   */
  listServerNeighbors(params: Discovery.Types.ListServerNeighborsRequest, callback?: (err: AWSError, data: Discovery.Types.ListServerNeighborsResponse) => void): Request<Discovery.Types.ListServerNeighborsResponse, AWSError>;
  /**
   * Retrieves a list of servers which are one network hop away from a specified server.
   */
  listServerNeighbors(callback?: (err: AWSError, data: Discovery.Types.ListServerNeighborsResponse) => void): Request<Discovery.Types.ListServerNeighborsResponse, AWSError>;
  /**
   * Instructs the specified agents or Connectors to start collecting data.
   */
  startDataCollectionByAgentIds(params: Discovery.Types.StartDataCollectionByAgentIdsRequest, callback?: (err: AWSError, data: Discovery.Types.StartDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StartDataCollectionByAgentIdsResponse, AWSError>;
  /**
   * Instructs the specified agents or Connectors to start collecting data.
   */
  startDataCollectionByAgentIds(callback?: (err: AWSError, data: Discovery.Types.StartDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StartDataCollectionByAgentIdsResponse, AWSError>;
  /**
   * Instructs the specified agents or Connectors to stop collecting data.
   */
  stopDataCollectionByAgentIds(params: Discovery.Types.StopDataCollectionByAgentIdsRequest, callback?: (err: AWSError, data: Discovery.Types.StopDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StopDataCollectionByAgentIdsResponse, AWSError>;
  /**
   * Instructs the specified agents or Connectors to stop collecting data.
   */
  stopDataCollectionByAgentIds(callback?: (err: AWSError, data: Discovery.Types.StopDataCollectionByAgentIdsResponse) => void): Request<Discovery.Types.StopDataCollectionByAgentIdsResponse, AWSError>;
  /**
   * Updates metadata about an application.
   */
  updateApplication(params: Discovery.Types.UpdateApplicationRequest, callback?: (err: AWSError, data: Discovery.Types.UpdateApplicationResponse) => void): Request<Discovery.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates metadata about an application.
   */
  updateApplication(callback?: (err: AWSError, data: Discovery.Types.UpdateApplicationResponse) => void): Request<Discovery.Types.UpdateApplicationResponse, AWSError>;
}
declare namespace Discovery {
  export interface AgentConfigurationStatus {
    /**
     * The agent/Connector ID.
     */
    agentId?: String;
    /**
     * Information about the status of the StartDataCollection and StopDataCollection operations. The system has recorded the data collection operation. The agent/Connector receives this command the next time it polls for a new command. 
     */
    operationSucceeded?: Boolean;
    /**
     * A description of the operation performed.
     */
    description?: String;
  }
  export type AgentConfigurationStatusList = AgentConfigurationStatus[];
  export type AgentId = string;
  export type AgentIds = AgentId[];
  export interface AgentInfo {
    /**
     * The agent or connector ID.
     */
    agentId?: AgentId;
    /**
     * The name of the host where the agent or connector resides. The host can be a server or virtual machine.
     */
    hostName?: String;
    /**
     * Network details about the host where the agent or connector resides.
     */
    agentNetworkInfoList?: AgentNetworkInfoList;
    /**
     * The ID of the connector.
     */
    connectorId?: String;
    /**
     * The agent or connector version.
     */
    version?: String;
    /**
     * The health of the agent or connector.
     */
    health?: AgentStatus;
    /**
     * Time since agent or connector health was reported.
     */
    lastHealthPingTime?: String;
    /**
     * Status of the collection process for an agent or connector.
     */
    collectionStatus?: String;
    /**
     * Type of agent.
     */
    agentType?: String;
    /**
     * Agent's first registration time stamp in UTC.
     */
    registeredTime?: String;
  }
  export interface AgentNetworkInfo {
    /**
     * The IP address for the host where the agent/Connector resides.
     */
    ipAddress?: String;
    /**
     * The MAC address for the host where the agent/Connector resides.
     */
    macAddress?: String;
  }
  export type AgentNetworkInfoList = AgentNetworkInfo[];
  export type AgentStatus = "HEALTHY"|"UNHEALTHY"|"RUNNING"|"UNKNOWN"|"BLACKLISTED"|"SHUTDOWN"|string;
  export type AgentsInfo = AgentInfo[];
  export type ApplicationId = string;
  export type ApplicationIdsList = ApplicationId[];
  export interface AssociateConfigurationItemsToApplicationRequest {
    /**
     * The configuration ID of an application with which items are to be associated.
     */
    applicationConfigurationId: ApplicationId;
    /**
     * The ID of each configuration item to be associated with an application.
     */
    configurationIds: ConfigurationIdList;
  }
  export interface AssociateConfigurationItemsToApplicationResponse {
  }
  export type Boolean = boolean;
  export type BoxedInteger = number;
  export type Condition = string;
  export type Configuration = {[key: string]: String};
  export type ConfigurationId = string;
  export type ConfigurationIdList = ConfigurationId[];
  export type ConfigurationItemType = "SERVER"|"PROCESS"|"CONNECTION"|"APPLICATION"|string;
  export interface ConfigurationTag {
    /**
     * A type of IT asset that you want to tag.
     */
    configurationType?: ConfigurationItemType;
    /**
     * The configuration ID for the item you want to tag. You can specify a list of keys and values.
     */
    configurationId?: ConfigurationId;
    /**
     * A type of tag to filter on. For example, serverType.
     */
    key?: TagKey;
    /**
     * A value to filter on. For example key = serverType and value = web server.
     */
    value?: TagValue;
    /**
     * The time the configuration tag was created in Coordinated Universal Time (UTC).
     */
    timeOfCreation?: TimeStamp;
  }
  export type ConfigurationTagSet = ConfigurationTag[];
  export type Configurations = Configuration[];
  export type ConfigurationsDownloadUrl = string;
  export type ConfigurationsExportId = string;
  export interface CreateApplicationRequest {
    /**
     * Name of the application to be created.
     */
    name: String;
    /**
     * Description of the application to be created.
     */
    description?: String;
  }
  export interface CreateApplicationResponse {
    /**
     * Configuration ID of an application to be created.
     */
    configurationId?: String;
  }
  export interface CreateTagsRequest {
    /**
     * A list of configuration items that you want to tag.
     */
    configurationIds: ConfigurationIdList;
    /**
     * Tags that you want to associate with one or more configuration items. Specify the tags that you want to create in a key-value format. For example:  {"key": "serverType", "value": "webServer"} 
     */
    tags: TagSet;
  }
  export interface CreateTagsResponse {
  }
  export interface CustomerAgentInfo {
    /**
     * Number of active discovery agents.
     */
    activeAgents: Integer;
    /**
     * Number of healthy discovery agents
     */
    healthyAgents: Integer;
    /**
     * Number of blacklisted discovery agents.
     */
    blackListedAgents: Integer;
    /**
     * Number of discovery agents with status SHUTDOWN.
     */
    shutdownAgents: Integer;
    /**
     * Number of unhealthy discovery agents.
     */
    unhealthyAgents: Integer;
    /**
     * Total number of discovery agents.
     */
    totalAgents: Integer;
    /**
     * Number of unknown discovery agents.
     */
    unknownAgents: Integer;
  }
  export interface CustomerConnectorInfo {
    /**
     * Number of active discovery connectors.
     */
    activeConnectors: Integer;
    /**
     * Number of healthy discovery connectors.
     */
    healthyConnectors: Integer;
    /**
     * Number of blacklisted discovery connectors.
     */
    blackListedConnectors: Integer;
    /**
     * Number of discovery connectors with status SHUTDOWN,
     */
    shutdownConnectors: Integer;
    /**
     * Number of unhealthy discovery connectors.
     */
    unhealthyConnectors: Integer;
    /**
     * Total number of discovery connectors.
     */
    totalConnectors: Integer;
    /**
     * Number of unknown discovery connectors.
     */
    unknownConnectors: Integer;
  }
  export interface DeleteApplicationsRequest {
    /**
     * Configuration ID of an application to be deleted.
     */
    configurationIds: ApplicationIdsList;
  }
  export interface DeleteApplicationsResponse {
  }
  export interface DeleteTagsRequest {
    /**
     * A list of configuration items with tags that you want to delete.
     */
    configurationIds: ConfigurationIdList;
    /**
     * Tags that you want to delete from one or more configuration items. Specify the tags that you want to delete in a key-value format. For example:  {"key": "serverType", "value": "webServer"} 
     */
    tags?: TagSet;
  }
  export interface DeleteTagsResponse {
  }
  export interface DescribeAgentsRequest {
    /**
     * The agent or the Connector IDs for which you want information. If you specify no IDs, the system returns information about all agents/Connectors associated with your AWS user account.
     */
    agentIds?: AgentIds;
    /**
     * You can filter the request using various logical operators and a key-value format. For example:   {"key": "collectionStatus", "value": "STARTED"}  For a complete list of filter options and guidance about using them with this action, see Managing AWS Application Discovery Service Agents and the AWS Application Discovery Connector .
     */
    filters?: Filters;
    /**
     * The total number of agents/Connectors to return in a single page of output. The maximum value is 100.
     */
    maxResults?: Integer;
    /**
     * Token to retrieve the next set of results. For example, if you previously specified 100 IDs for DescribeAgentsRequest$agentIds but set DescribeAgentsRequest$maxResults to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.
     */
    nextToken?: NextToken;
  }
  export interface DescribeAgentsResponse {
    /**
     * Lists agents or the Connector by ID or lists all agents/Connectors associated with your user account if you did not specify an agent/Connector ID. The output includes agent/Connector IDs, IP addresses, media access control (MAC) addresses, agent/Connector health, host name where the agent/Connector resides, and the version number of each agent/Connector.
     */
    agentsInfo?: AgentsInfo;
    /**
     * Token to retrieve the next set of results. For example, if you specified 100 IDs for DescribeAgentsRequest$agentIds but set DescribeAgentsRequest$maxResults to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.
     */
    nextToken?: NextToken;
  }
  export type DescribeConfigurationsAttribute = {[key: string]: String};
  export type DescribeConfigurationsAttributes = DescribeConfigurationsAttribute[];
  export interface DescribeConfigurationsRequest {
    /**
     * One or more configuration IDs.
     */
    configurationIds: ConfigurationIdList;
  }
  export interface DescribeConfigurationsResponse {
    /**
     * A key in the response map. The value is an array of data.
     */
    configurations?: DescribeConfigurationsAttributes;
  }
  export interface DescribeExportConfigurationsRequest {
    /**
     * A unique identifier that you can use to query the export status.
     */
    exportIds?: ExportIds;
    /**
     * The maximum number of results that you want to display as a part of the query.
     */
    maxResults?: Integer;
    /**
     * A token to get the next set of results. For example, if you specified 100 IDs for DescribeExportConfigurationsRequest$exportIds but set DescribeExportConfigurationsRequest$maxResults to 10, you will get results in a set of 10. Use the token in the query to get the next set of 10.
     */
    nextToken?: NextToken;
  }
  export interface DescribeExportConfigurationsResponse {
    /**
     * Returns export details. When the status is complete, the response includes a URL for an Amazon S3 bucket where you can view the data in a CSV file.
     */
    exportsInfo?: ExportsInfo;
    /**
     * A token to get the next set of results. For example, if you specified 100 IDs for DescribeExportConfigurationsRequest$exportIds but set DescribeExportConfigurationsRequest$maxResults to 10, you will get results in a set of 10. Use the token in the query to get the next set of 10.
     */
    nextToken?: NextToken;
  }
  export interface DescribeTagsRequest {
    /**
     * You can filter the list using a key-value format. You can separate these items by using logical operators. Allowed filters include tagKey, tagValue, and configurationId.  For a complete list of filter options and guidance about using them with this action, see Managing AWS Application Discovery Service Agents and the AWS Application Discovery Connector .
     */
    filters?: TagFilters;
    /**
     * The total number of items to return in a single page of output. The maximum value is 100.
     */
    maxResults?: Integer;
    /**
     * A token to start the list. Use this token to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface DescribeTagsResponse {
    /**
     * Depending on the input, this is a list of configuration items tagged with a specific tag, or a list of tags for a specific configuration item.
     */
    tags?: ConfigurationTagSet;
    /**
     * The call returns a token. Use this token to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface DisassociateConfigurationItemsFromApplicationRequest {
    /**
     * Configuration ID of an application from which each item will be disassociated.
     */
    applicationConfigurationId: ApplicationId;
    /**
     * Configuration ID of each item be be disassociated from an application.
     */
    configurationIds: ConfigurationIdList;
  }
  export interface DisassociateConfigurationItemsFromApplicationResponse {
  }
  export interface ExportConfigurationsResponse {
    /**
     * A unique identifier that you can use to query the export status.
     */
    exportId?: ConfigurationsExportId;
  }
  export type ExportIds = ConfigurationsExportId[];
  export interface ExportInfo {
    /**
     * A unique identifier that you can use to query the export.
     */
    exportId: ConfigurationsExportId;
    /**
     * The status of the configuration data export. The status can succeed, fail, or be in-progress.
     */
    exportStatus: ExportStatus;
    /**
     * Helpful status messages for API callers. For example: Too many exports in the last 6 hours. Export in progress. Export was successful.
     */
    statusMessage: ExportStatusMessage;
    /**
     * A URL for an Amazon S3 bucket where you can review the configuration data. The URL is displayed only if the export succeeded.
     */
    configurationsDownloadUrl?: ConfigurationsDownloadUrl;
    /**
     * The time the configuration data export was initiated.
     */
    exportRequestTime: ExportRequestTime;
  }
  export type ExportRequestTime = Date;
  export type ExportStatus = "FAILED"|"SUCCEEDED"|"IN_PROGRESS"|string;
  export type ExportStatusMessage = string;
  export type ExportsInfo = ExportInfo[];
  export interface Filter {
    /**
     * The name of the filter.
     */
    name: String;
    /**
     * A string value that you want to filter on. For example, if you choose the destinationServer.osVersion filter name, you could specify Ubuntu for the value.
     */
    values: FilterValues;
    /**
     * A conditional operator. The following operators are valid: EQUALS, NOT_EQUALS, CONTAINS, NOT_CONTAINS. If you specify multiple filters, the system utilizes all filters as though concatenated by AND. If you specify multiple values for a particular filter, the system differentiates the values using OR. Calling either DescribeConfigurations or ListConfigurations returns attributes of matching configuration items.
     */
    condition: Condition;
  }
  export type FilterName = string;
  export type FilterValue = string;
  export type FilterValues = FilterValue[];
  export type Filters = Filter[];
  export interface GetDiscoverySummaryRequest {
  }
  export interface GetDiscoverySummaryResponse {
    /**
     * Number of servers discovered.
     */
    servers?: Long;
    /**
     * Number of applications discovered.
     */
    applications?: Long;
    /**
     * Number of servers mapped to applications.
     */
    serversMappedToApplications?: Long;
    /**
     * Number of servers mapped to tags.
     */
    serversMappedtoTags?: Long;
    /**
     * Details about discovered agents, including agent status and health.
     */
    agentSummary?: CustomerAgentInfo;
    /**
     * Details about discovered connectors, including connector status and health.
     */
    connectorSummary?: CustomerConnectorInfo;
  }
  export type Integer = number;
  export interface ListConfigurationsRequest {
    /**
     * A valid configuration identified by the Discovery Service. 
     */
    configurationType: ConfigurationItemType;
    /**
     * You can filter the request using various logical operators and a key-value format. For example:   {"key": "serverType", "value": "webServer"}  For a complete list of filter options and guidance about using them with this action, see Querying Discovered Configuration Items. 
     */
    filters?: Filters;
    /**
     * The total number of items to return. The maximum value is 100.
     */
    maxResults?: Integer;
    /**
     * Token to retrieve the next set of results. For example, if a previous call to ListConfigurations returned 100 items, but you set ListConfigurationsRequest$maxResults to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.
     */
    nextToken?: NextToken;
    /**
     * Certain filter criteria return output that can be sorted in ascending or descending order. For a list of output characteristics for each filter, see Querying Discovered Configuration Items.
     */
    orderBy?: OrderByList;
  }
  export interface ListConfigurationsResponse {
    /**
     * Returns configuration details, including the configuration ID, attribute names, and attribute values.
     */
    configurations?: Configurations;
    /**
     * Token to retrieve the next set of results. For example, if your call to ListConfigurations returned 100 items, but you set ListConfigurationsRequest$maxResults to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.
     */
    nextToken?: NextToken;
  }
  export interface ListServerNeighborsRequest {
    /**
     * Configuration ID of the server for which neighbors are being listed.
     */
    configurationId: ConfigurationId;
    /**
     * Flag to indicate if port and protocol information is needed as part of the response.
     */
    portInformationNeeded?: Boolean;
    /**
     * List of configuration IDs to test for one-hop-away.
     */
    neighborConfigurationIds?: ConfigurationIdList;
    /**
     * Maximum number of results to return in a single page of output.
     */
    maxResults?: Integer;
    /**
     * Token to retrieve the next set of results. For example, if you previously specified 100 IDs for ListServerNeighborsRequest$neighborConfigurationIds but set ListServerNeighborsRequest$maxResults to 10, you received a set of 10 results along with a token. Use that token in this query to get the next set of 10.
     */
    nextToken?: String;
  }
  export interface ListServerNeighborsResponse {
    /**
     * List of distinct servers that are one hop away from the given server.
     */
    neighbors: NeighborDetailsList;
    /**
     * Token to retrieve the next set of results. For example, if you specified 100 IDs for ListServerNeighborsRequest$neighborConfigurationIds but set ListServerNeighborsRequest$maxResults to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10.
     */
    nextToken?: String;
    /**
     * Count of distinct servers that are one hop away from the given server.
     */
    knownDependencyCount?: Long;
  }
  export type Long = number;
  export type Message = string;
  export interface NeighborConnectionDetail {
    /**
     * ID of server that opened the network connection.
     */
    sourceServerId: ConfigurationId;
    /**
     * ID of the server that accepted the networker connection.
     */
    destinationServerId: ConfigurationId;
    /**
     * Destination network port for the connection.
     */
    destinationPort?: BoxedInteger;
    /**
     * Network protocol used for the connection.
     */
    transportProtocol?: String;
    /**
     * Number of open network connections with the neighboring server.
     */
    connectionsCount: Long;
  }
  export type NeighborDetailsList = NeighborConnectionDetail[];
  export type NextToken = string;
  export interface OrderByElement {
    /**
     * Field to order on.
     */
    fieldName: String;
    /**
     * Ordering direction.
     */
    sortOrder?: orderString;
  }
  export type OrderByList = OrderByElement[];
  export interface StartDataCollectionByAgentIdsRequest {
    /**
     * The IDs of the agents or Connectors that you want to start collecting data. If you send a request to an agent/Connector ID that you do not have permission to contact, according to your AWS account, the service does not throw an exception. Instead, it returns the error in the Description field. If you send a request to multiple agents/Connectors and you do not have permission to contact some of those agents/Connectors, the system does not throw an exception. Instead, the system shows Failed in the Description field.
     */
    agentIds: AgentIds;
  }
  export interface StartDataCollectionByAgentIdsResponse {
    /**
     * Information about agents or the Connector that were instructed to start collecting data. Information includes the agent/Connector ID, a description of the operation performed, and whether or not the agent/Connector configuration was updated.
     */
    agentsConfigurationStatus?: AgentConfigurationStatusList;
  }
  export interface StopDataCollectionByAgentIdsRequest {
    /**
     * The IDs of the agents or Connectors that you want to stop collecting data.
     */
    agentIds: AgentIds;
  }
  export interface StopDataCollectionByAgentIdsResponse {
    /**
     * Information about agents or the Connector that were instructed to stop collecting data. Information includes the agent/Connector ID, a description of the operation performed, and whether or not the agent/Connector configuration was updated.
     */
    agentsConfigurationStatus?: AgentConfigurationStatusList;
  }
  export type String = string;
  export interface Tag {
    /**
     * A type of tag to filter on.
     */
    key: TagKey;
    /**
     * A value for a tag key to filter on.
     */
    value: TagValue;
  }
  export interface TagFilter {
    /**
     * A name of a tag filter.
     */
    name: FilterName;
    /**
     * Values of a tag filter.
     */
    values: FilterValues;
  }
  export type TagFilters = TagFilter[];
  export type TagKey = string;
  export type TagSet = Tag[];
  export type TagValue = string;
  export type TimeStamp = Date;
  export interface UpdateApplicationRequest {
    /**
     * Configuration ID of the application to be updated.
     */
    configurationId: ApplicationId;
    /**
     * New name of the application to be updated.
     */
    name?: String;
    /**
     * New description of the application to be updated.
     */
    description?: String;
  }
  export interface UpdateApplicationResponse {
  }
  export type orderString = "ASC"|"DESC"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-11-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Discovery client.
   */
  export import Types = Discovery;
}
export = Discovery;
