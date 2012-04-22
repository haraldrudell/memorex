// ioclient.js
// client for stockNotifier sockets

// global object used for inter-module sharing
if (typeof NOTIFIER == 'undefined') NOTIFIER = {};

// executes on document load
$(function() {
	console.log('load')
	// only works if socket.io has been loaded
/*	if (!io) {
		alert('Communication module from server missing')
		return
	}

	var socket =  io.connect()
	var connected = false
	socket.on( 'connect', function () {
		console.log('connect')
		connected = true
	})
*/
var selected
var connected = false
	// if an element with class monitor clicked:
	$('.monitor').click(function() {
		console.log('click!', this)
		if (selected) $(selected).css("border-color", "white")
		$(this).css("border-color", "brown")
		selected = this
		if (connected) {
			socket.emit('enable', { id: this.id, enable: this.checked })
		}
	})

	$('.monitorvalue').click(function() {
		if (connected) {
			var value = $('#' + this.id + '-value').val()
			console.log(this.id + value)
			socket.emit('enable', { id: this.id + value, enable: this.checked })
		}
	})

	$('#invert').click(function() {
		if (connected) {
			var dataArray = []
			$('.monitor').each(function(index, checkbox) {
				$(checkbox).attr('checked', !$(checkbox).attr('checked'))
				dataArray.push({ id: checkbox.id, enable: checkbox.checked })
			})
			console.log(dataArray)
			socket.emit('enable', dataArray)
		}
	})

	console.log('endload')
})
