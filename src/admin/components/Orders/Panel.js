import Table from "./Table";

function Panel(props) {

  return (
    <div className="panel panel-default">
      <div className="panel-heading" >{props.heading}</div>
      <div className="panel-body" style={{ fontWeight: "bold" }}>
        <div className="container">
          <div className="col-md-12">
            <Table orders={props.orders} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
