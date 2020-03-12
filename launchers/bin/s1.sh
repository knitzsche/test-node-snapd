#/bin/bash

SYSID=`snapctl get systemid`
while true; do
	echo "===== ${SNAP}.s1 is running"
	echo "========= SYSTEMID is ${SYSID} "
	sleep 5
done
